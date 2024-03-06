<script setup>
import SubscribeFeature from "./SubscribeFeature.vue";
</script>

<template>
  <article class="subscribe-card card">
    <div class="subscribe-card-content">
      <div class="subscribe-card__head-wrapper">
        <h1 class="subscribe-card__title">{{ title }}</h1>
        <p class="subscribe-card__lore">{{ lore }}</p>
      </div>
      <div class="subscribe-card__features">
        <subscribe-feature
          v-for="(text, index) in subscriptionTexts"
          :key="index"
          :text="text"
          :disabled="index >= activeFeatures"
        />
      </div>
      <hr v-if="extraFeatures !== undefined && extraFeatures.length != 0" class="subscribe-card__extra-separator" />
      <div class="subscribe-card__features">
        <subscribe-feature v-for="(text, index) in extraFeatures" :key="index"
        :text="text" extra="true"
        />
      </div>
    </div>
    <div class="price-block">
      <h1 class="subscribe-card__price">{{ price }} ₽</h1>
    </div>
  </article>
</template>

<script>
export default {
  data: function () {
    return {
      subscriptionTexts: [
        "Поддержка и развитие сайта",
        "Проектирование сайта",
        "Дизайн сайта",
        "Программирование сайта",
        "HTML - верстка сайта",
        "Тестирование сайта",
        "Настройка рекламы",
        "Фирменный стиль",
        "Разработка логотипа",
      ],
    };
  },
  props: {
    activeFeatures: {
      type: Number,
    },
    extraFeatures: {
      type: Array,
    },
    price: {
      type: String,
    },
    title: String,
    lore: String,
  },
};
</script>

<style scoped>
.subscribe-card {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid black;
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.subscribe-card:hover {
  cursor: pointer;
}
.subscribe-card:hover .subscribe-card__price {
  color: var(--purple);
}
.subscribe-card__extra-separator {
  margin: 0 50px 15px 20px;
  color: #BABDBF;
}
.subscribe-card__features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 0 30px 0;
}
.subscribe-card__title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 1px;
  text-align: left;
  color: #263238;
}
.subscribe-card__lore {
  font-size: 22px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: left;
}
.subscribe-card__price {
  font-size: 50px;
  font-weight: 600;
  line-height: 54px;
  letter-spacing: 1px;
  text-align: left;
  transition: all 0.3s linear 0s;
}
.price-block {
  margin: 0 50px 0 0;
  padding: 30px 0 0 5px;
  border: #a8adaf solid;
  border-width: 1px 0 0 0;
}
.ability-number {
  color: var(--purple);
}
.subscribe-card__head-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 1023px) {
  .subscribe-card {
    border-radius: 2px;
    padding: 30px 0 30px 30px;
  }
  .price-block {
    margin: 0 30px 0 0;
    padding: 20px 0 0 0;
  }
  .subscribe-card__title {
    font-size: 20px;
    line-height: 22px;
  }
  .subscribe-card__lore {
    font-size: 16px;
    line-height: 17px;
    margin: 0 0 20px 0;
  }
  .subscribe-card__price {
    font-size: 30px;
    line-height: 32px;
  }
  .subscribe-card__features {
    gap: 15px;
    padding: 0 0 15px 0;
  }
  .subscribe-card__extra-separator {
    margin: 0 50px 15px 20px;
  }
}
</style>
