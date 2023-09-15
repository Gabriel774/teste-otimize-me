<template>
  <section :class="`grid-form ${gridBig ? 'grid-big' : ''}`">
    <component
      v-for="input in inputs"
      :id="input.id"
      :label="input.label"
      :placeholder="input.placeholder"
      :value="stateValues[input.id]"
      :key="input.id"
      :size="input.size"
      :is="input.type"
      :mask="masks[input.mask]"
      :showCheckbox="input.showCheckbox"
      :checkboxLabel="input.checkboxLabel"
      :disabled="input.disabled"
      :options="input.options"
      @focus="callAction('initiateCheckout')"
      @checkboxChange="input.checkboxChange($event)"
      @changeValue="updateValue($event)"
      @blur="
        [input.action && callAction(input.action), input.blur && input.blur()]
      "
    />
  </section>
</template>

<script>
import masks from "@/utils/masks";
import { TextInput, SelectInput } from "../../molecules";

export default {
  name: "GridForm",
  data: () => {
    return {
      masks,
    };
  },
  methods: {
    callAction(action) {
      this.$store.dispatch(action);
    },
    updateValue(event) {
      this.$store.commit("updateValue", { ...event });
    },
  },
  props: ["inputs", "stateValues", "gridBig"],
  components: { TextInput, SelectInput },
};
</script>

<style scoped>
.grid-form {
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 32px;
  justify-content: center;
  align-items: center;

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
  }
}

.grid-big {
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
