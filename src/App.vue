<template>
  <div id="app">
    <div class="dragTop"></div>
    <div class="sidebar"></div>
    <router-view class="router" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: ""
    };
  }
};
</script>
<style>
:root {
  --left: 200px;
  --top: 40px;
  --shadowcolor: rgba(33, 33, 33, 0.3);
}
* {
  margin: 0;
  box-sizing: border-box;
  background-color: #33333311;
}
.dragTop {
  -webkit-app-region: drag;
  background-color: aqua;
  box-shadow: 0 3px 5px var(--shadowcolor);
  width: 100%;
  height: var(--top);
  position: fixed;
  top: 0;
}
.sidebar {
  width: var(--left);
  height: 100vh;
  position: fixed;
  box-shadow: 3px 0 5px var(--shadowcolor);
}
.router {
  height: calc(100vh - var(--top));
  margin-top: var(--top);
  margin-left: var(--left);
  overflow: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
