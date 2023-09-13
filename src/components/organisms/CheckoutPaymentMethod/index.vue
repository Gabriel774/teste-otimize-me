<template>
  <section id="checkout-payment-method-container">
    <div id="payment-options-container">
      <PaymentOption
        v-for="option in paymentOptions"
        :key="option.value"
        :value="option.value"
        :label="option.label"
        :imgSrc="option.img"
        :active="$store.state.paymentDataModule.option === option.value"
        @paymentSelected="updatePaymentMethod($event)"
      />
    </div>

    <CreditCardForm
      v-if="$store.state.paymentDataModule.option === 'credit-card'"
    />
    <PixForm v-if="$store.state.paymentDataModule.option === 'pix'" />
    <TicketForm v-if="$store.state.paymentDataModule.option === 'ticket'" />

    <el-button class="finish-purchase-button">Comprar Agora</el-button>

    <img
      class="safe-icon"
      src="../../../assets/safe-icon.jpeg"
      alt="Você está em um ambiente seguro"
    />
  </section>
</template>

<script>
import PaymentOption from "../../molecules/PaymentOption/index.vue";
import CreditCardForm from "./forms/CreditCardForm.vue";
import PixForm from "./forms/PixForm.vue";
import TicketForm from "./forms/TicketForm.vue";
import paymentOptions from "./paymentOptions";

export default {
  name: "CheckoutPaymentMethod",
  components: { PaymentOption, CreditCardForm, PixForm, TicketForm },
  data: () => {
    return {
      paymentOptions,
    };
  },
  methods: {
    updatePaymentMethod(value) {
      console.log(value);
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

.finish-purchase-button:hover {
  background-color: #f6a13c;
  color: white;
}

.safe-icon {
  width: 209px;
  height: 68px;
  align-self: center;
  justify-self: center;
}
</style>
