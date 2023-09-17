<template>
  <section id="user-data-form">
    <GridForm
      :stateValues="state"
      :inputs="inputs"
      :updateValue="updateValue"
      :gridResize="true"
    />
  </section>
</template>

<script>
import { GridForm } from "../../organisms";
import masks from "../../../utils/masks";
import states from "./states";
import ViaCepService from "../../../services/ViaCepService";
import form from "./form";
import { mapState } from "vuex";

export default {
  name: "UserDataForm",
  data: () => {
    return {
      states,
      disabledFields: [],
      numberDisabled: false,
      masks,
    };
  },
  computed: {
    inputs() {
      return form({
        disabledFields: this.disabledFields,
        data: this.state,
        states: this.states,
        checkboxChange: this.updateCheckbox,
        isFieldDisabled: this.isFieldDisabled,
        getAddressData: this.getAddressData,
      });
    },
    ...mapState({
      state: (state) => state.user,
    }),
  },
  components: { GridForm },
  methods: {
    async getAddressData() {
      this.disabledFields = [];
      if (this.state.zipCode.length < 9) return;

      const service = new ViaCepService();
      const data = await service.getAddressData(this.state.zipCode);

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
    updateValue(value) {
      this.$store.commit("updateValue", value);
    },
    updateCheckbox(value) {
      this.$store.commit("updateValue", { key: "addressNumber", value: "" });
      this.$store.commit("updateValue", { key: "numberDisabled", value });
      this.$store.dispatch("fillAddress");
    },
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
  padding: 24px;
}
</style>
