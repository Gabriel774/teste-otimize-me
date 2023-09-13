import { Vue } from "./libs";
import App from "./App.vue";

import "element-ui/lib/theme-chalk/index.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
