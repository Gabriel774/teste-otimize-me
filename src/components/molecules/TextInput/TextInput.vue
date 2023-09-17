<template>
  <div :id="`${id}-input-container`" :class="`text-input grid-${size}`">
    <label :for="id" class="input-label">{{ label }}</label>

    <el-input
      :id="id"
      :name="id"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      @input="$emit('changeValue', { value: maskValue($event), key: id })"
    />

    <el-checkbox
      v-if="showCheckbox"
      class="checkbox-container"
      @change="$emit('checkboxChange', $event)"
      :label="checkboxLabel"
      :itemid="`checkbox-${id}`"
    />
    
    <span class="input-error-text">
      {{ error }}
    </span>
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
    marginTop: Boolean,
    mask: Function,
    size: String,
    error: String,
  },
  methods: {
    maskValue(value) {
      if (this.mask) return this.mask(value);
      return value;
    },
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
  margin-top: auto;
  width: 100%;
  height: 100%;
}

.top-spacing {
  margin-top: auto;
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
