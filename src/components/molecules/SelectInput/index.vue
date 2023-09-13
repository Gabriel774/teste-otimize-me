<template>
  <div class="select-input">
    <label :for="id" class="input-label">{{ label }}</label>
    <el-select
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @change="$emit('changeValue', { value: $event, key: id })"
    >
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
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
</style>
