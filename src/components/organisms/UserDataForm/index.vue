<template>
  <section id="user-data-form">
    <el-row id="main-content">
      <el-row class="row" type="flex">
        <el-col>
          <TextInput
            @focus="initiateCheckout()"
            :id="'name'"
            :label="'Nome completo'"
            :value="this.$store.state.userModule.name"
            :placeholder="'Digite seu nome completo'"
            @changeValue="[updateValue($event), addToCart()]"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            @focus="initiateCheckout()"
            :id="'email'"
            :label="'E-mail'"
            :value="this.$store.state.userModule.email"
            :placeholder="'Digite seu e-mail'"
            @changeValue="[updateValue($event), addToCart()]"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            @focus="initiateCheckout()"
            :id="'phone'"
            :label="'Telefone'"
            :value="this.$store.state.userModule.phone"
            :mask="maskPhone"
            :placeholder="'(00) x0000-0000'"
            @changeValue="[updateValue($event), addToCart()]"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <TextInput
            @focus="initiateCheckout()"
            :id="'zipCode'"
            :label="'CEP'"
            :value="this.$store.state.userModule.zipCode | zipCodeMask"
            :placeholder="'Digite seu CEP'"
            :mask="maskZipCode"
            @changeValue="[updateValue($event), fillAddress()]"
            @blur="getAddressData()"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            @focus="initiateCheckout()"
            :id="'address'"
            :label="'Endereço'"
            :value="this.$store.state.userModule.address"
            :placeholder="'Digite seu endereço'"
            :disabled="isFieldDisabled('address')"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            @focus="initiateCheckout()"
            :id="'addressNumber'"
            :label="'Número'"
            :value="this.$store.state.userModule.addressNumber | numberMask"
            :placeholder="'Número'"
            :showCheckbox="true"
            :disabled="numberDisabled"
            :mask="maskNumber"
            :checkboxLabel="'Sem número'"
            @checkboxChange="updateCheckbox($event)"
            @changeValue="[updateValue($event), fillAddress()]"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <TextInput
            @focus="initiateCheckout()"
            :id="'addressComplement'"
            :label="'Complemento'"
            :value="this.$store.state.userModule.addressComplement"
            :placeholder="'Digite seu complemento'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            @focus="initiateCheckout()"
            :id="'district'"
            :label="'Bairro'"
            :value="this.$store.state.userModule.district"
            :disabled="isFieldDisabled('district')"
            :placeholder="'Digite seu bairro'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            @focus="initiateCheckout()"
            :id="'city'"
            :label="'Cidade'"
            :value="this.$store.state.userModule.city"
            :placeholder="'Digite sua cidade'"
            :disabled="isFieldDisabled('city')"
            @changeValue="updateValue($event)"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <SelectInput
            :id="'state'"
            :label="'Estado'"
            :value="this.$store.state.userModule.state"
            :placeholder="'Selecione o seu estado'"
            :options="states"
            :disabled="isFieldDisabled('state')"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>
    </el-row>
  </section>
</template>

<script>
import { TextInput } from "@/components/molecules";
import { SelectInput } from "@/components/molecules";
import { numberMask, phoneMask, zipCodeMask } from "../../../utils/filters";
import states from "./states";
import ViaCepService from "../../../services/ViaCepService";

export default {
  name: "UserDataForm",
  props: [],
  data: () => {
    return {
      states,
      disabledFields: [],
      numberDisabled: false,
    };
  },
  components: { TextInput, SelectInput },
  methods: {
    updateValue(event) {
      this.$store.commit("updateValue", { ...event });
    },

    async getAddressData() {
      this.disabledFields = [];
      if (this.$store.state.userModule.zipCode.length < 9) return;

      const service = new ViaCepService();
      const data = await service.getAddressData(
        this.$store.state.userModule.zipCode
      );

      if (data.logradouro) {
        this.$store.commit("updateValue", {
          key: "address",
          value: data.logradouro,
        });
        this.disabledFields = [...this.disabledFields, "address"];
      }
      if (data.bairro) {
        this.$store.commit("updateValue", {
          key: "district",
          value: data.bairro,
        });
        this.disabledFields = [...this.disabledFields, "district"];
      }
      if (data.localidade) {
        this.$store.commit("updateValue", {
          key: "city",
          value: data.localidade,
        });
        this.disabledFields = [...this.disabledFields, "city"];
      }
      if (data.uf) {
        this.$store.commit("updateValue", {
          key: "state",
          value: data.uf,
        });
        this.disabledFields = [...this.disabledFields, "state"];
      }
    },

    isFieldDisabled(fieldName) {
      return this.disabledFields.includes(fieldName);
    },

    updateCheckbox(value) {
      this.$store.commit("updateValue", { key: "addressNumber", value: "" });
      this.numberDisabled = value;
    },
    maskPhone(value) {
      return phoneMask(value);
    },
    maskZipCode(value) {
      return zipCodeMask(value);
    },
    maskNumber(value) {
      return numberMask(value);
    },
    initiateCheckout() {
      this.$store.dispatch("initiateCheckout");
    },
    addToCart() {
      this.$store.dispatch("addToCart");
    },
    fillAddress() {
      this.$store.dispatch("fillAddress");
    },
  },
  filters: {
    zipCodeMask,
    phoneMask,
    numberMask,
  },
};
</script>

<style scoped>
#user-data-form {
  width: 100%;
  max-width: 680px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
}

#main-content {
  padding: 24px;
}
.row {
  margin-bottom: 12px;

  @media (max-width: 568px) {
    flex-direction: column;
    gap: 12px;
  }
}
.row:last-child {
  margin-bottom: 0;
}

.col-expand {
  @media (max-width: 568px) {
    width: 100%;
  }
}
</style>
