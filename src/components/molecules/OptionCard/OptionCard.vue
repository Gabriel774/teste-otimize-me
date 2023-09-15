<template>
  <div
    :class="`option-card ${active && 'option-card-active'}`"
    @click="$emit('optionSelected', value)"
  >
    <img :src="imgSrc" alt="label" />
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "OptionCard",
  props: ["imgSrc", "label", "value", "active"],
};
</script>

<style scoped>
.option-card {
  background-color: #fff;
  width: 100%;
  max-width: 132px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  height: 55px;
  border: 1px solid #b0b0b0;
  color: #b0b0b0;
  padding: 8px;
  gap: 4px;
  font-size: 12px;
  display: flex;
  font-weight: 500;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
}

.option-card-active {
  border-color: #ff6905;
  background-color: #e67a201a;
}
</style>
