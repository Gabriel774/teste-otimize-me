<template>
  <div
    :id="`${id}-input-container`"
    :class="`select-input grid-${size} ${noMarginTop && 'no-margin-top'}`"
  >
    <label :for="id" :class="`input-label ${labelFill ? 'label-fill' : ''}`">{{
      label
    }}</label>

    <el-select
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :class="`select ${marginTop ? 'top-spacing' : ''}`"
      :disabled="disabled"
      @change="$emit('changeValue', { value: $event, key: id })"
    >
      <el-option :label="placeholder" :disabled="true" :value="''" />
      <el-option
        v-for="option in options"
        :key="option.value ? option.value : option"
        :label="option.label ? option.label : option"
        :value="option.value ? option.value : option"
      />
    </el-select>
    <span class="input-error-text">
      {{ error }}
    </span>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    label: String,
    value: String,
    placeholder: String,
    id: String,
    options: Array,
    disabled: Boolean,
    marginTop: Boolean,
    size: String,
    noMarginTop: Boolean,
    labelFill: Boolean,
    error: String,
  },
};
</script>

<style scoped>
.input-label {
  font-size: 14px;
  font-weight: 400;
}

.select-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
  margin-top: auto;
  height: 100%;
  width: 100%;
}

.no-margin-top {
  margin-top: 0;
}

.label-fill {
  height: 17px;
}

.top-spacing {
  margin-top: 18px;
}

.grid-small {
  grid-column: span 1;
}

.grid-big {
  grid-column: span 2;
}

.grid-extra-big {
  grid-column: span 3;
}

.input-error-text {
  color: tomato;
  margin-left: 12px;
  font-size: 12px;
}
</style>
