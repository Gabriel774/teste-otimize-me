<template>
  <section id="checkout-payment-method-container">
    <div id="payment-options-container">
      <OptionCard
        v-for="option in paymentOptions"
        :key="option.value"
        :value="option.value"
        :label="option.label"
        :imgSrc="option.img"
        :active="paymentState.option === option.value"
        @optionSelected="updatePaymentMethod($event)"
      />
    </div>

    <CreditCardForm
      :paymentState="paymentState"
      :productState="productState"
      v-if="paymentState.option === 'credit-card'"
    />
    <PixForm
      :productName="productState.name"
      :productPrice="productState.price"
      :cpf_cnpj="paymentState.cpf_cnpj"
      v-if="paymentState.option === 'pix'"
    />
    <TicketForm
      :productName="productState.name"
      :productPrice="productState.price"
      :cpf_cnpj="paymentState.cpf_cnpj"
      v-if="paymentState.option === 'ticket'"
    />

    <el-button class="finish-purchase-button">Comprar Agora</el-button>

    <img
      class="safe-icon"
      src="../../../assets/safe-icon.jpeg"
      alt="Você está em um ambiente seguro"
    />
  </section>
</template>

<script>
import { OptionCard } from "../../molecules";
import CreditCardForm from "./forms/CreditCardForm/CreditCardForm.vue";
import PixForm from "./forms/PixForm/PixForm.vue";
import TicketForm from "./forms/TicketForm/TicketForm.vue";
import paymentOptions from "./paymentOptions";

export default {
  name: "CheckoutPaymentMethod",
  components: { OptionCard, CreditCardForm, PixForm, TicketForm },
  data: () => {
    return {
      paymentOptions,
    };
  },
  props: ["paymentState", "productState"],
  methods: {
    updatePaymentMethod(value) {
      this.$store.commit("updateOption", value);
    },
  },
};
</script>

<style scoped>
#checkout-payment-method-container {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 680px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
  padding: 24px;
  gap: 32px;
}

#payment-options-container {
  display: flex;
  width: 100%;
  gap: 24px;
  justify-content: center;
  align-items: center;

  @media (max-width: 568px) {
    flex-direction: column;
  }
}

.finish-purchase-button {
  background-color: #ff6905;
  color: white;
  transition: all 0.2s;
  font-size: 18px;
  width: 100%;
  max-width: 360px;
}

.finish-purchase-button:hover,
.finish-purchase-button:focus {
  background-color: #f6a13c;
  border-color: #f6a23c37;
  color: white;
}

.safe-icon {
  width: 209px;
  height: 68px;
  align-self: center;
  justify-self: center;
}
</style>
