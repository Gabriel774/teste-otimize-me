<template>
  <div id="user-data-form">
    <el-row id="main-content">
      <el-row class="row" type="flex">
        <el-col>
          <TextInput
            :id="'name'"
            :label="'Nome completo'"
            :value="form.name"
            :placeholder="'Digite seu nome completo'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            :id="'email'"
            :label="'E-mail'"
            :value="form.email"
            :placeholder="'Digite seu e-mail'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            :id="'phone'"
            :label="'Telefone'"
            :value="form.phone | phoneMask"
            :placeholder="'(00) x0000-0000'"
            @changeValue="updateValue($event)"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <TextInput
            :id="'zipCode'"
            :label="'CEP'"
            :value="form.zipCode | zipCodeMask"
            :placeholder="'Digite seu CEP'"
            @changeValue="updateValue($event)"
            @blur="getAddressData()"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            :id="'address'"
            :label="'Endereço'"
            :value="form.address"
            :placeholder="'Digite seu endereço'"
            :disabled="isFieldDisabled('address')"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            :id="'addressNumber'"
            :label="'Número'"
            :value="form.addressNumber | numberMask"
            :placeholder="'Número'"
            :showCheckbox="true"
            :disabled="numberDisabled"
            :checkboxLabel="'Sem número'"
            @checkboxChange="updateCheckbox($event)"
            @changeValue="updateValue($event)"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <TextInput
            :id="'addressComplement'"
            :label="'Complemento'"
            :value="form.addressComplement"
            :placeholder="'Digite seu complemento'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row">
        <el-col>
          <TextInput
            :id="'district'"
            :label="'Bairro'"
            :value="form.district"
            :disabled="isFieldDisabled('district')"
            :placeholder="'Digite seu bairro'"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>

      <el-row class="row" :gutter="30" type="flex">
        <el-col class="col-expand" :span="12">
          <TextInput
            :id="'city'"
            :label="'Cidade'"
            :value="form.city"
            :placeholder="'Digite sua cidade'"
            :disabled="isFieldDisabled('city')"
            @changeValue="updateValue($event)"
          />
        </el-col>

        <el-col class="col-expand" :span="12">
          <SelectInput
            :id="'state'"
            :label="'Estado'"
            :value="form.state"
            :placeholder="'Selecione o seu estado'"
            :options="states"
            :disabled="isFieldDisabled('state')"
            @changeValue="updateValue($event)"
          />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { TextInput } from "@/components/molecules";
import { SelectInput } from "@/components/molecules";
import form from "./form";
import { numberMask, phoneMask, zipCodeMask } from "../../../utils/filters";
import states from "./states";
import ViaCepService from "../../../services/ViaCepService";

export default {
  name: "UserDataForm",
  props: [],
  data: () => {
    return {
      form,
      states,
      disabledFields: [],
      numberDisabled: false,
    };
  },
  components: { TextInput, SelectInput },
  methods: {
    updateValue(event) {
      this.form[event.key] = event.value;
    },

    async getAddressData() {
      this.disabledFields = [];

      const service = new ViaCepService();
      const data = await service.getAddressData(this.form.zipCode);

      if (data.logradouro) {
        this.form.address = data.logradouro;
        this.disabledFields = [...this.disabledFields, "address"];
      }
      if (data.bairro) {
        this.form.district = data.bairro;
        this.disabledFields = [...this.disabledFields, "district"];
      }
      if (data.localidade) {
        this.form.city = data.localidade;
        this.disabledFields = [...this.disabledFields, "city"];
      }
      if (data.uf) {
        this.form.state = data.uf;
        this.disabledFields = [...this.disabledFields, "state"];
      }
    },

    isFieldDisabled(fieldName) {
      return this.disabledFields.includes(fieldName);
    },

    updateCheckbox(value) {
      this.form.addressNumber = "";
      this.numberDisabled = value;
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
