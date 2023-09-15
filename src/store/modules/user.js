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
  }),
  mutations: {
    updateValue(state, payload) {
      state[payload.key] = payload.value;
    },
  },
  actions: {},
};

export { user };
