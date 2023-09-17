const user = {
  state: () => ({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    address: "",
    addressNumber: "",
    addressComplement: "",
    district: "",
    city: "",
    state: "",
    numberDisabled: false,
    errors: {},
  }),
  mutations: {
    updateValue(state, payload) {
      state[payload.key] = payload.value;
    },
    updateUserErrors(state, payload) {
      state.errors = payload;
    },
  },
  actions: {},
};

export { user };
