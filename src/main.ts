import Vue from "vue";
import App from "./App.vue";
import VueMarkdown from 'vue-markdown-render';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  components: {
    VueMarkdown
  }
}).$mount("#app");
