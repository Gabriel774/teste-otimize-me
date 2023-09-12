<template>
  <div id="app">
    <ProductCheckout />
  </div>
</template>

<script>
import ProductCheckout from "./views/ProductCheckout.vue";
export default {
  name: "App",
  components: {
    ProductCheckout,
  },
};
</script>

<style>
@import "./fonts/fonts.css";

body {
  background-color: #f6f6f6;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
