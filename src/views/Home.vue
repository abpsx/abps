<template>
  <div class="home">
    <p>基础调用</p>
    <button @click="checkElectron">electron调用检测</button>
    <hr />
    <p>渲染进程功能测试</p>
    <button @click="callNotification">通知 notification</button>
    <hr />
    <p>type3</p>
    <hr />
    <p>type4</p>
    <hr />
    <p>type5</p>
    <hr />
    <p>type6</p>
    <hr />
    <p>type7</p>
    <hr />
    <p>type8</p>
    <hr />
    <p>type9</p>
    <hr />
    <p>type10</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      electron: {
        version: ""
      }
    };
  },
  mounted() {},
  methods: {
    callNotification() {
      const { shell } = this.$electron;
      let option = {
        title: "Title of the notification",
        body: "Click there to open baidu with the default borwser",
        href: "www.baidu.com"
      };

      let hhwNotication = new Notification(option.title, option);

      hhwNotication.onclick = function() {
        shell.openExternal(option.href);
      };
    },
    checkElectron() {
      alert(this.$electron.remote.process.arch === "ia32" ? "success" : "fail");
    }
  }
};
</script>

<style>
.home {
  padding: 25px 20px;
}
hr {
  margin: 10px 0;
}
button {
  margin-bottom: 10px 0;
}
</style>
