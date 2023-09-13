<template>
  <section id="product-info-container">
    <el-row :gutter="32" id="content">
      <el-col class="column" :span="10">
        <img src="../../../assets/product-image.png" alt="Produto" />
      </el-col>

      <el-col class="column" id="text-container">
        <p id="title">{{ name }}</p>
        <p id="price">R$ {{ price }} / Mês</p>
        <p id="description">{{ description }}</p>
      </el-col>

      <el-col class="column" :span="16">
        <el-select v-model="country" placeholder="Alterar país">
          <el-option label="Alterar país" :value="null" :disabled="true" />
          <el-option
            v-for="country in countries"
            :key="country.value"
            :label="country.label"
            :value="country.value"
          />
        </el-select>
      </el-col>
    </el-row>

    <el-row id="footer">
      <span> contatolivrediet@gmail.com </span>
    </el-row>
  </section>
</template>

<script>
import countries from "./countries";

export default {
  name: "ProductInfo",
  props: ["name", "price", "description"],
  data: () => {
    return {
      country: "",
      countries,
    };
  },
};
</script>

<style scoped>
#product-info-container {
  background-color: #fff;
  width: 100%;
  max-width: 680px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #b0b0b0;
}

#content {
  padding: 16px;
  display: flex;

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
}

#text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media (max-width: 568px) {
    align-items: center;
    text-align: center;
  }
}

.column {
  @media (max-width: 568px) {
    align-items: center;
    text-align: center;
    width: fit-content;
  }
}
</style>
