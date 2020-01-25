// 拓展导入模块 让vue支持electron&node的API

const electron = window.require("electron");
module.exports = {
  install: function(Vue) {
    Object.defineProperties(Vue.prototype, {
      $electron: {
        get() {
          return electron;
        }
      }
    });
  }
};
