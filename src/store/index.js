import Vuex from "vuex";
import { paymentData } from "./modules/paymentData";
import { product } from "./modules/product";
import { user } from "./modules/user";
import actions from "./actions";

const store = new Vuex.Store({
  state: () => ({
    initiatedCheckout: false,
  }),
  modules: {
    paymentData,
    product,
    user,
  },
  mutations: {
    setInitiatedCheckout(state, payload) {
      state.initiatedCheckout = payload;
    },
  },
  actions,
});

export default store;
