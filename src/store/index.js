import Vuex from "vuex";
import { paymentDataModule } from "./modules/paymentData";
import { productModule } from "./modules/product";
import { userModule } from "./modules/user";

const store = new Vuex.Store({
  state: () => ({
    initiatedCheckout: false,
  }),
  modules: {
    paymentDataModule,
    productModule,
    userModule,
  },
  actions: {
    initiateCheckout(context) {
      if (context.state.initiatedCheckout) return;
      context.state.initiatedCheckout = true;
      console.log("InitiatedCheckout");
    },

    addToCart(context) {
      if (
        context.state.userModule.name !== "" &&
        (context.state.userModule.phone || context.state.userModule.email)
      ) {
        console.log("AddToCart");
      }
    },

    fillAddress(context) {
      if (
        context.state.userModule.zipCode.length > 8 &&
        context.state.userModule.addressNumber.length > 0
      ) {
        console.log("FillAddress");
      }
    },
  },
});

export default store;
