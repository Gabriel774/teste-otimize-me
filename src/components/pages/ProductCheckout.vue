<template>
  <main id="container">
    <ProductInfo
      :name="state.product.name"
      :price="state.product.price"
      :description="state.product.description"
    />

    <UserDataForm />

    <CheckoutForm
      :paymentState="state.paymentData"
      :productState="state.product"
    />

    <TaxText v-if="state.paymentData.option === 'credit-card'" />

    <AppFooter />
  </main>
</template>

<script>
import { AppFooter } from "../atoms";
import { ProductInfo } from "../organisms/index";
import { UserDataForm, CheckoutForm } from "../templates";
import { TaxText } from "../atoms";

export default {
  name: "ProductCheckout",
  components: {
    ProductInfo,
    UserDataForm,
    CheckoutForm,
    AppFooter,
    TaxText,
  },
  props: ["state"],
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
