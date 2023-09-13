const paymentDataModule = {
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
  },
  actions: {},
};

export { paymentDataModule };
