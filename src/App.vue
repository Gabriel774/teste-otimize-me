<template>
  <div id="app">
    <ProductCheckout />
  </div>
</template>

<script>
import { ProductCheckout } from "./components/pages";

export default {
  name: "App",
  components: {
    ProductCheckout,
  },
  created() {
    document.body.addEventListener("mouseleave", function () {
      console.log("ChangeWindow");
    });
    window.addEventListener("beforeunload", function (e) {
      console.log("CloseWindow");
      e.preventDefault();
      e.returnValue = "";
    });
  },
};
</script>

<style>
@import "./fonts/fonts.css";

body {
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
