<template>
  <div class="card-checkout">
    <img :src="imgSrc" alt="ícone" />

    <h3 class="card-title">{{ title }}</h3>

    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardCheckout",
  props: ["imgSrc", "title", "description"],
};
</script>

<style>
.card-checkout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #b0b0b0;
  min-width: 208px;
  max-width: 308px;
  min-height: 126px;
  width: 100%;

  padding: 8px;
}

.card-title {
  color: #212529;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.card-description {
  color: #212529;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
}
</style>
