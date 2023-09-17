<template>
  <div class="credit-card">
    <div class="card-icons">
      <div>
        <img src="../../../assets/credit-card-stamp-icon.png" alt="bandeira" />
      </div>

      <div class="flag-container">
        <img
          v-if="cardFlag"
          :class="`flag-icon ${cardFlag.big ? 'flag-big' : ''}`"
          :src="cardFlag.icon"
          :alt="cardFlag.alt"
        />
      </div>
    </div>

    <div class="credit-card-number">
      <span>
        {{ cardNumber !== "" ? cardNumber : "#### #### #### ####" }}
      </span>
    </div>

    <div class="credit-card-owner-data">
      <div>
        <p class="credit-card-owner-data-text">Titular</p>
        <p class="credit-card-owner-data-text uppercase">
          {{ cardOwner !== "" ? cardOwner.slice(0, 30) : "Nome do titular" }}
        </p>
      </div>

      <div>
        <p class="credit-card-owner-data-text">Validade</p>
        <p class="credit-card-owner-data-text">
          {{ cardMonth !== "" ? cardMonth : "MÊS" }}/{{
            cardYear !== "" ? cardYear.toString().slice(2, 4) : "ANO"
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import creditCardFlag from "../../../utils/creditCardFlag";
export default {
  name: "CreditCard",
  props: ["cardNumber", "cardOwner", "cardYear", "cardMonth"],
  computed: {
    cardFlag() {
      return creditCardFlag(this.cardNumber.replace(/ /g, ""));
    },
  },
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

  @media (max-width: 390px) {
    transform: scale(0.8);
  }
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

.card-icons {
  display: flex;
  justify-content: space-between;
}

.flag-container {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 7px;
  border-radius: 7px;
  height: 46px;
  min-width: 55px;
}

.flag-icon {
  height: 20px;
}

.flag-big {
  height: 40px;
}
</style>
