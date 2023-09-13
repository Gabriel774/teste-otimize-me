import Vue from "vue";
import App from "./App.vue";
import ElementUI, {
  Button,
  Select,
  Input,
  Row,
  Col,
  Option,
  Checkbox,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Checkbox);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
