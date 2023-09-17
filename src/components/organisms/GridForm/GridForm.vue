<template>
  <section
    :class="`
    grid-form
    ${gridResize ? 'grid-resize' : ''}
    ${gridBig ? 'grid-big' : ''}
    ${gapSmall ? 'gap-small' : ''}
    `"
  >
    <component
      v-for="input in inputs"
      :id="input.id"
      :label="input.label"
      :placeholder="input.placeholder"
      :value="input.value ? input.value : stateValues[input.id]"
      :error="errors ? errors[input.id] : stateValues.errors[input.id]"
      :key="input.id"
      :size="input.size"
      :is="input.type"
      :mask="masks[input.mask]"
      :showCheckbox="input.showCheckbox"
      :checkboxLabel="input.checkboxLabel"
      :disabled="input.disabled"
      :labelFill="input.labelFill"
      :options="input.options"
      @focus="callAction('initiateCheckout')"
      @checkboxChange="input.checkboxChange($event)"
      @changeValue="
        [
          input.update ? input.update($event) : updateValue($event),
          input.actionOnChange && callAction(input.actionOnChange),
        ]
      "
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
  created() {
    this.$store.subscribe((mutation) => {
      if (
        mutation.type === "updateUserErrors" ||
        mutation.type === "updateCpfCnpjError" ||
        mutation.type === "updatePaymentErrors"
      )
        this.$forceUpdate();
    });
  },
  methods: {
    callAction(action) {
      this.$store.dispatch(action);
    },
  },
  props: [
    "inputs",
    "stateValues",
    "gridBig",
    "updateValue",
    "gapSmall",
    "gridResize",
    "errors",
  ],
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
}

.grid-resize {
  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
  }
}

.grid-big {
  grid-template-columns: 1fr 1fr 1fr;
}

.gap-small {
  gap: 12px;
}
</style>
