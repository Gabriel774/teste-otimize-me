<template>
  <section class="product-info-container">
    <div class="product-info-content">
      <img :src="imgSrc" alt="Produto" />

      <div class="product-info-text-container">
        <p id="title">{{ name }}</p>

        <p id="price">
          R$
          {{
            new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(price)
          }}
          {{ subscription ? "/ Mês" : "" }}
        </p>

        <p id="description">{{ description }}</p>
      </div>

      <SelectInput
        :value="country"
        :placeholder="'Alterar país'"
        :options="countries"
        :noMarginTop="true"
        class="change-country-input"
        @changeValue="updateCountry($event)"
      />
    </div>

    <div id="footer">
      <span> contatolivrediet@gmail.com </span>
    </div>
  </section>
</template>

<script>
import { SelectInput } from "../../molecules";
import countries from "./countries";

export default {
  name: "ProductInfo",
  props: ["name", "price", "description", "subscription", "imgSrc"],
  components: { SelectInput },
  data: () => {
    return {
      country: "",
      countries,
    };
  },
  methods: {
    updateCountry(item) {
      this.country = item.value;
    },
  },
};
</script>

<style scoped>
.product-info-container {
  background-color: #fff;
  width: 100%;
  max-width: 680px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
}

.product-info-content {
  padding: 16px;
  display: flex;
  gap: 32px;

  @media (max-width: 610px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}

.change-country-input {
  max-width: 190px;
  margin-left: auto;

  @media (max-width: 610px) {
    margin: auto;
  }
}

#title {
  color: #303133;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
}

#price {
  font-size: 20px;
  font-weight: 600;
  color: #ff6905;
  margin: 0;
}

#description {
  font-size: 12px;
  font-weight: 400;
  margin: 0;
}

#footer {
  background-color: #ff6905;
  color: #fbfbfb;
  border-top: 1px solid #b0b0b0;
  padding: 16px 8px;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 610px) {
    align-items: center;
    text-align: center;
  }
}

.product-info-text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media (max-width: 610px) {
    align-items: center;
    text-align: center;
  }
}
</style>
