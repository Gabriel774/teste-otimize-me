import Vuex from "vuex";
import { paymentData } from "./modules/paymentData";
import { product } from "./modules/product";
import { user } from "./modules/user";
import actions from "./actions";

const store = new Vuex.Store({
  state: () => ({
    initiatedCheckout: false,
    addedToCart: false,
    filledAddress: false,
    addedPaymentInfo: false,
  }),
  modules: {
    paymentData,
    product,
    user,
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value;
    },
  },
  actions,
});

export default store;
