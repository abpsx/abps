// const MessageBox = require('../demo/MessageBox')

import { app, protocol, BrowserWindow, Menu, MenuItem, globalShortcut } from "electron";
import { createProtocol, installVueDevtools } from "vue-cli-plugin-electron-builder/lib";

const isDevelopment = process.env.NODE_ENV !== "production";

let win;

protocol.registerStandardSchemes(["app"], { secure: true });

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true
    }, titleBarStyle: 'hidden', frame: false, resizable: false,
    icon: `${__static}/app.ico`
  });
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });
  createMenu();
}

function createMenu() {
  // 页面内快捷键
  const template = [
    {
      visible: false,
      accelerator: 'CmdOrCtrl+Q',
      label: "退出"
    }, {
      visible: false,
      label: ''
    },

  ];
  let menu = Menu.buildFromTemplate(template);
  if (process.platform === "darwin") {
    Menu.setApplicationMenu(menu);
  } else {
    Menu.setApplicationMenu(menu);
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  globalShortcut.register('CommandOrControl+Shift+d', function () {
    win.webContents.openDevTools()
  })
  createWindow();
});

if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

