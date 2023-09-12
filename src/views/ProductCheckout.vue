<template>
  <main id="container">
    <ProductInfo
      :name="productName"
      :price="productPrice"
      :description="productDescription"
    />
    <UserDataForm />
  </main>
</template>

<script>
import { ProductInfo, UserDataForm } from "../components/organisms/index";

export default {
  name: "ProductCheckout",
  data: () => {
    return {
      productName: "Nome do produto",
      productPrice: "50,00",
      productDescription: "Plano mensal com renovação automática",
    };
  },
  components: {
    ProductInfo,
    UserDataForm,
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px;
}
</style>
