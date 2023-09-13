<template>
  <div class="form-wrapper">
    <el-row type="flex" :gutter="32" id="credit-card-form-container">
      <el-col class="credit-card-form">
        <el-row class="row">
          <TextInput
            :id="'number'"
            :label="'Número do cartão'"
            :value="this.$store.state.paymentDataModule.creditCard.number"
            :placeholder="'Digite somente os números'"
            :mask="maskCreditCard"
            @focus="initiateCheckout()"
            @changeValue="updateValue($event)"
          />
        </el-row>
        <el-row class="row">
          <TextInput
            :id="'owner'"
            :label="'Titular do cartão'"
            :value="this.$store.state.paymentDataModule.creditCard.owner"
            :placeholder="'Digite o nome impresso no cartão'"
            @changeValue="updateValue($event)"
          />
        </el-row>

        <el-row class="row">
          <TextInput
            :id="'cpf_cnpj'"
            :label="'CPF/CNPJ do Titular'"
            :value="this.$store.state.paymentDataModule.cpf_cnpj"
            :placeholder="'Digite somente os números'"
            :mask="maskCpfCnpj"
            @focus="initiateCheckout()"
            @changeValue="updateCpfCnpj($event)"
          />
        </el-row>

        <el-row class="row">
          <el-row :gutter="10" type="flex">
            <el-col>
              <SelectInput
                :id="'month'"
                :label="'Validade'"
                :value="this.$store.state.paymentDataModule.creditCard.month"
                :placeholder="'Mês'"
                :options="mothOptions"
                @changeValue="updateValue($event)"
              />
            </el-col>
            <el-col>
              <SelectInput
                :id="'year'"
                :value="this.$store.state.paymentDataModule.creditCard.year"
                :placeholder="'Ano'"
                :marginTop="true"
                :options="yearOptions"
                @changeValue="updateValue($event)"
              />
            </el-col>
            <el-col>
              <TextInput
                :id="'cvv'"
                :label="'CVV'"
                :value="this.$store.state.paymentDataModule.creditCard.cvv"
                :placeholder="'CVV'"
                :mask="maskCVV"
                @focus="initiateCheckout()"
                @changeValue="updateValue($event)"
              />
            </el-col>
          </el-row>
        </el-row>
        <el-row class="row">
          <SelectInput
            :id="'installments'"
            :label="'Número de parcelas'"
            :value="this.$store.state.paymentDataModule.creditCard.installments"
            :placeholder="'Selecione o número de parcelas'"
            :options="installmentOptions"
            @changeValue="updateValue($event)"
          />
        </el-row>
      </el-col>

      <el-col class="credit-card-form">
        <CreditCard />
      </el-col>
    </el-row>

    <h3 class="resume-details">Detalhes da compra</h3>

    <div class="product-info-container">
      <p class="product-name">Nome do produto</p>
      <p class="product-value">
        R$ {{ this.$store.state.productModule.price }} / Mês
      </p>
    </div>

    <div class="charge-info">
      <img
        src="../../../../assets/credit-card-edit-icon.png"
        alt="Cartão de crédito"
      />
      <p class="charge-label">
        Essa cobrança aparecerá na sua fatura como: PAYT*NomeDoProduto
      </p>
    </div>
  </div>
</template>

<script>
import {
  cpfCnpjMask,
  creditCardMask,
  cvvMask,
} from "../../../../utils/filters";
import { TextInput, SelectInput, CreditCard } from "../../../molecules";
import { months, years, installments } from "./selectOptions";

export default {
  name: "CreditCardForm",
  components: { TextInput, SelectInput, CreditCard },
  data: () => {
    return {
      mothOptions: months,
      yearOptions: years,
      installmentOptions: installments,
    };
  },
  methods: {
    updateValue(event) {
      console.log(this.$store.state);
      this.$store.commit("updateCreditCardValue", { ...event });
    },
    updateCpfCnpj(event) {
      this.$store.commit("updateCpfCnpj", event.value);
    },
    maskCpfCnpj(value) {
      return cpfCnpjMask(value);
    },
    maskCreditCard(value) {
      return creditCardMask(value);
    },
    maskCVV(value) {
      return cvvMask(value);
    },
    initiateCheckout() {
      this.$store.dispatch("initiateCheckout");
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

.credit-card-form {
  width: fit-content;
}
.row {
  margin-bottom: 12px;
}

.row:last-child {
  margin-bottom: 0;
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
