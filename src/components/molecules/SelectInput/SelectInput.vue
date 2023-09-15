<template>
  <div :class="`select-input grid-${size}`">
    <label :for="id" class="input-label">{{ label }}</label>
    <el-select
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :class="`${marginTop && 'top-spacing'}`"
      :disabled="disabled"
      @change="$emit('changeValue', { value: $event, key: id })"
    >
      <el-option
        v-for="option in options"
        :key="option.value ? option.value : option"
        :label="option.label ? option.label : option"
        :value="option.value ? option.value : option"
      />
    </el-select>
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
</style>
