const paymentData = {
  state: () => ({
    option: "credit-card",
    cpf_cnpj: "",
    creditCard: {
      number: "",
      owner: "",
      month: "",
      year: "",
      cvv: "",
      installments: "1",
    },
    errors: {},
  }),
  mutations: {
    updateCreditCardValue(state, payload) {
      state.creditCard[payload.key] = payload.value;
    },

    updateCpfCnpj(state, payload) {
      state.cpf_cnpj = payload;
    },

    updateOption(state, payload) {
      state.option = payload;
    },
    updatePaymentErrors(state, payload) {
      state.errors = payload;
    },
    updateCpfCnpjError(state, payload) {
      state.errors.cpf_cnpj = payload;
    },
  },
  actions: {},
};

export { paymentData };
