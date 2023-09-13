<template>
  <div class="credit-card">
    <el-row type="flex" justify="space-between">
      <el-col :span="4">
        <img src="../../../assets/credit-card-stamp-icon.png" alt="" />
      </el-col>
      <el-col :span="6">
        <img src="../../../assets/visa-icon.png" alt="" />
      </el-col>
    </el-row>

    <el-row class="credit-card-number">
      <span> {{ this.$store.state.paymentDataModule.creditCard.number }} </span>
    </el-row>

    <div class="credit-card-owner-data">
      <div>
        <p class="credit-card-owner-data-text">Titular</p>
        <p class="credit-card-owner-data-text uppercase">
          {{ this.$store.state.paymentDataModule.creditCard.owner }}
        </p>
      </div>

      <div>
        <p class="credit-card-owner-data-text">Validade</p>
        <p class="credit-card-owner-data-text">
          {{ this.$store.state.paymentDataModule.creditCard.month }}/{{
            this.$store.state.paymentDataModule.creditCard.year
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  props: ["cardNumber", "cardOwner", "cardYear", "cardMonth"],
};
</script>

<style>
.credit-card {
  background-image: url("../../../assets/card-background.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 330px;
  height: 200px;
  color: #fff;
  position: relative;
  padding: 18px 30px;
  z-index: 0;
  font-family: "Source Code Pro";
  margin-top: 16px;
}

.credit-card::before {
  width: 100%;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 7px;
  height: 100%;
  z-index: -1;
  background-color: rgba(28, 29, 39, 0.5);
}

.credit-card-number {
  font-size: 14px;
  font-weight: 400;
  word-spacing: 5px;
  letter-spacing: 2px;
  min-height: 18px;
  margin-top: 38px;
}

.credit-card-owner-data {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: #fff;
  z-index: 2;
}

.credit-card-owner-data-col {
  display: flex;
  flex-direction: column;
}

.credit-card-owner-data-text {
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
}

.uppercase {
  font-weight: 600;
  text-transform: uppercase;
}
</style>
