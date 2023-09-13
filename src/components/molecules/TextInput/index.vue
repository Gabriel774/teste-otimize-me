<template>
  <div class="text-input">
    <label :for="id" class="input-label">{{ label }}</label>

    <el-input
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @blur="$emit('blur')"
      @input="$emit('changeValue', { value: $event, key: id })"
    />

    <el-checkbox
      v-if="showCheckbox"
      class="checkbox-container"
      @change="$emit('checkboxChange', $event)"
      :label="checkboxLabel"
      :itemid="`checkbox-${id}`"
    />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: String,
    placeholder: String,
    value: String,
    id: String,
    disabled: Boolean,
    showCheckbox: Boolean,
    checkboxLabel: String,
  },
};
</script>

<style scoped>
.input-label {
  font-size: 14px;
  font-weight: 400;
}

.checkbox-container {
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  color: #ccc;
  top: 32px;
  right: 20px;
  font-size: 14px;
}

.text-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: relative;
}
</style>
