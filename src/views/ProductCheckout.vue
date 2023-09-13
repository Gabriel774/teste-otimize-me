<template>
  <main id="container">
    <ProductInfo
      :name="this.$store.state.productModule.name"
      :price="this.$store.state.productModule.price"
      :description="this.$store.state.productModule.description"
    />

    <UserDataForm />

    <CheckoutPaymentMethod />

    <AppFooter />
  </main>
</template>

<script>
import { AppFooter } from "../components/atoms";
import {
  CheckoutPaymentMethod,
  ProductInfo,
  UserDataForm,
} from "../components/organisms/index";

export default {
  name: "ProductCheckout",
  components: {
    ProductInfo,
    UserDataForm,
    CheckoutPaymentMethod,
    AppFooter,
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
