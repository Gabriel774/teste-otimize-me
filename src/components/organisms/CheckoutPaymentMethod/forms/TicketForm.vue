<template>
  <div class="form-wrapper">
    <h2 class="form-title">Atenção:</h2>

    <div class="cards-container">
      <CardCheckout
        class=""
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :imgSrc="card.img"
      />
    </div>

    <h3 class="resume-details">Detalhes da compra</h3>

    <div class="product-info-container">
      <p class="product-name">Nome do produto</p>
      <p class="product-value">
        R$ {{ this.$store.state.productModule.price }} / Mês
      </p>
    </div>

    <TextInput
      :id="'cpf_cnpj'"
      :label="'CPF/CNPJ (Para emissão de Nota Fiscal)'"
      :value="this.$store.state.paymentDataModule.cpf_cnpj"
      :mask="maskCpfCnpj"
      @changeValue="updateCpfCnpj($event)"
      class="cpf-cnpj-input"
    />
  </div>
</template>

<script>
import { cpfCnpjMask } from "../../../../utils/filters";
import { TextInput, CardCheckout } from "../../../molecules";
import { months, years, installments } from "./selectOptions";
import { ticketCards } from "./cards";

export default {
  name: "TicketForm",
  components: { TextInput, CardCheckout },
  data: () => {
    return {
      mothOptions: months,
      yearOptions: years,
      installmentOptions: installments,
      cards: ticketCards,
    };
  },
  methods: {
    updateCpfCnpj(event) {
      this.$store.commit("updateCpfCnpj", event.value);
    },
    maskCpfCnpj(value) {
      return cpfCnpjMask(value);
    },
  },
};
</script>

<style scoped>
#credit-card-form-container {
  @media (max-width: 685px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.resume-details {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
  line-height: 21px; /* 150% */
}

.product-info-container {
  display: flex;
  justify-content: space-between;
}

.product-name {
  font-size: 12px;
  font-weight: 700;
  margin: 0;
}
.product-value {
  margin: 0;
  font-size: 12px;
}

.charge-info {
  display: flex;
  gap: 10px;
  align-items: center;
}

.charge-label {
  font-size: 10px;
  margin: 0;
  padding: 0;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cpf-cnpj-input {
  width: 100%;
  max-width: 360px;
}

.form-title {
  color: #707070;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin: 0 auto;
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: space-around;
}
</style>
