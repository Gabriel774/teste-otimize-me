<template>
  <main id="container">
    <ProductInfo
      :name="state.product.name"
      :price="state.product.price"
      :description="state.product.description"
      :subscription="state.product.subscription"
      :imgSrc="state.product.imgSrc"
    />

    <UserDataForm />

    <CheckoutForm />

    <p
      v-if="
        state.paymentData.option === 'credit-card' && state.product.subscription
      "
      class="tax-text"
    >
      *OBS.: Taxa de 2.99% a.m.
    </p>

    <AppFooter />
  </main>
</template>

<script>
import { mapState } from "vuex";
import { AppFooter } from "../atoms";
import { ProductInfo } from "../organisms/index";
import { UserDataForm, CheckoutForm } from "../templates";

export default {
  name: "ProductCheckout",
  components: {
    ProductInfo,
    UserDataForm,
    CheckoutForm,
    AppFooter,
  },
  computed: {
    ...mapState({
      state: (state) => state,
    }),
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

.tax-text {
  font-size: 12px;
  margin: 0;
  font-weight: 400;
}
</style>
