import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import importExtend from "./plugins/importExtend";
Vue.config.productionTip = false;
Vue.use(importExtend);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
