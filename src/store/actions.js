export default {
  initiateCheckout(context) {
    if (context.state.initiatedCheckout) return;
    context.commit("setInitiatedCheckout", true);
    console.log("InitiatedCheckout");
  },

  addToCart(context) {
    if (
      context.state.user.name !== "" &&
      (context.state.user.phone || context.state.user.email)
    ) {
      console.log("AddToCart");
    }
  },

  fillAddress(context) {
    if (
      context.state.user.zipCode.length > 8 &&
      context.state.user.addressNumber.length > 0
    ) {
      console.log("FillAddress");
    }
  },
};
