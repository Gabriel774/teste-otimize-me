import schemaCpfCnpj from "../validations/cpfCnpj";
import schemaPayment from "../validations/payment";
import schemaUser from "../validations/user";

export default {
  initiateCheckout(context) {
    if (context.state.initiatedCheckout) return;
    context.commit("setState", {
      key: "initiatedCheckout",
      value: true,
    });
    console.log("InitiatedCheckout");
  },

  addToCart(context) {
    if (
      context.state.user.name !== "" &&
      (context.state.user.phone || context.state.user.email)
    ) {
      if (context.state.addedToCart) return;
      context.commit("setState", {
        key: "addedToCart",
        value: true,
      });
      console.log("AddToCart");
    }
  },

  fillAddress(context) {
    if (
      context.state.user.zipCode.length > 8 &&
      (context.state.user.addressNumber.length > 0 ||
        context.state.user.numberDisabled)
    ) {
      if (context.state.filledAddress) return;
      context.commit("setState", {
        key: "filledAddress",
        value: true,
      });
      console.log("FillAddress");
    }
  },

  addPaymentInfo(context) {
    const state = context.state.paymentData;

    if (
      state.option === "credit-card" &&
      state.creditCard.owner.length >= 3 &&
      state.creditCard.number !== "" &&
      state.creditCard.year !== "" &&
      state.creditCard.cvv.length >= 3 &&
      state.creditCard.month !== "" &&
      (state.cpf_cnpj.replace(/\D/g, "").length === 11 ||
        state.cpf_cnpj.replace(/\D/g, "").length === 14)
    ) {
      if (context.state.addedPaymentInfo) return;
      context.commit("setState", {
        key: "addedPaymentInfo",
        value: true,
      });
      return console.log("AddPaymentInfo");
    }

    if (
      state.option !== "credit-card" &&
      (state.cpf_cnpj.replace(/\D/g, "").length === 11 ||
        state.cpf_cnpj.replace(/\D/g, "").length === 14)
    ) {
      if (context.state.addedPaymentInfo) return;
      context.commit("setState", {
        key: "addedPaymentInfo",
        value: true,
      });
      return console.log("AddPaymentInfo");
    }
  },

  async purchase(context) {
    let scrolled = false;
    context.commit("updatePaymentErrors", {});
    context.commit("updateUserErrors", {});
    context.commit("updateCpfCnpjError", "");

    const userValidated = await schemaUser(context)
      .validate(context.state.user, { abortEarly: false })
      .catch((err) => {
        let errors = {};
        err.inner.map((error) => {
          if (!scrolled) {
            scrolled = true;
            const el = document.getElementById(
              `${error.params.path}-input-container`
            );
            el.scrollIntoView({ behavior: "smooth" });
          }
          errors[error.params.path] = error.errors[0];
        });
        context.commit("updateUserErrors", errors);
      });

    const paymentValidated = await schemaPayment()
      .validate(context.state.paymentData.creditCard, { abortEarly: false })
      .catch((err) => {
        if (context.state.paymentData.option === "credit-card") {
          let errors = {};
          err.inner.map((error) => {
            if (!scrolled) {
              scrolled = true;
              const el = document.getElementById(
                `${error.params.path}-input-container`
              );
              el.scrollIntoView({ behavior: "smooth" });
            }
            errors[error.params.path] = error.errors[0];
          });
          context.commit("updatePaymentErrors", errors);
        }
      });

    const cpfCnpjValidated = await schemaCpfCnpj()
      .validate(context.state.paymentData)
      .catch((err) => {
        context.commit("updateCpfCnpjError", err.message);
      });

    if (
      context.state.paymentData.option === "credit-card" &&
      userValidated &&
      paymentValidated &&
      cpfCnpjValidated
    ) {
      return console.log("Purchase");
    }

    if (
      context.state.paymentData.option !== "credit-card" &&
      userValidated &&
      cpfCnpjValidated
    )
      return console.log("Purchase");

    return console.log("PurchaseFail");
  },
};
