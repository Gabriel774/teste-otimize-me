import imgSrc from "../../assets/product-image.png";

const product = {
  state: () => ({
    name: "Nome do produto",
    price: 50,
    imgSrc,
    subscription: true,
    installments: 12,
    description: "Plano mensal com renovação automática",
  }),
  mutations: {},
  actions: {},
};

export { product };
