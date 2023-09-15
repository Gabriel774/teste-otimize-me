<template>
  <div class="form-wrapper">
    <div id="credit-card-form-container">
      <div class="credit-card-form">
        <GridForm
          :gridBig="true"
          :inputs="inputs"
          :stateValues="productState"
        />
      </div>

      <div class="credit-card-form">
        <CreditCard
          :cardNumber="paymentState.creditCard.number"
          :cardMonth="paymentState.creditCard.month"
          :cardOwner="paymentState.creditCard.owner"
          :cardYear="paymentState.creditCard.year"
        />
      </div>
    </div>

    <h3 class="resume-details">Detalhes da compra</h3>

    <div class="product-info-container">
      <p class="product-name">Nome do produto</p>
      <p class="product-value">R$ {{ productState.price }} / Mês</p>
    </div>

    <div class="charge-info">
      <img
        src="../../../../../assets/credit-card-edit-icon.png"
        alt="Cartão de crédito"
      />
      <p class="charge-label">
        Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
      </p>
    </div>
  </div>
</template>

<script>
import masks from "../../../../../utils/masks";
import { CreditCard } from "../../../../molecules";
import { months, years, installments } from "./selectOptions";
import { GridForm } from "../../../../organisms";
import form from "./form";

export default {
  name: "CreditCardForm",
  components: { CreditCard, GridForm },
  data: () => {
    return {
      mothOptions: months,
      yearOptions: years,
      installmentOptions: installments,
      masks,
    };
  },
  computed: {
    inputs() {
      return form({
        months,
        years,
        installments,
      });
    },
  },
  props: ["productState", "paymentState"],
  methods: {
    updateCpfCnpj(event) {
      this.$store.commit("updateCpfCnpj", event.value);
    },
  },
};
</script>

<style scoped>
#credit-card-form-container {
  display: flex;
  gap: 32px;

  @media (max-width: 685px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.credit-card-form {
  width: fit-content;
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
</style>
