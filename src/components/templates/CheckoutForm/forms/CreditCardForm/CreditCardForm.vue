<template>
  <div class="form-wrapper">
    <div id="credit-card-form-container">
      <div class="credit-card-form">
        <GridForm
          :gridBig="true"
          :gapSmall="true"
          :inputs="inputs"
          :stateValues="paymentState.creditCard"
          :errors="paymentState.errors"
          :updateValue="updateValue"
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

      <p class="product-value">
        R$
        {{
          new Intl.NumberFormat("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(productState.price)
        }}

        {{ productState.subscription ? "/ Mês" : "" }}
      </p>
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
import { mapState } from "vuex";

export default {
  name: "CreditCardForm",
  components: { CreditCard, GridForm },
  data: () => {
    return {
      mothOptions: months,
      yearOptions: years,
      masks,
    };
  },
  computed: {
    inputs() {
      return form({
        months,
        years,
        installmentOptions: installments,
        updateCpfCnpj: this.updateCpfCnpj,
        cpfCnpjValue: this.paymentState.cpf_cnpj,
        productPrice: this.productState.price,
        installments: this.productState.installments,
      });
    },
    ...mapState({
      paymentState: (state) => state.paymentData,
      productState: (state) => state.product,
    }),
  },
  methods: {
    updateCpfCnpj(event) {
      this.$store.commit("updateCpfCnpj", event.value);
    },
    updateValue(event) {
      this.$store.commit("updateCreditCardValue", event);
    },
  },
};
</script>

<style scoped>
#credit-card-form-container {
  display: flex;
  gap: 32px;

  @media (max-width: 700px) {
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
  line-height: 21px;
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
