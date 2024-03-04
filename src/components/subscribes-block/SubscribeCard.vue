<script setup>
import SubscribeFeature from './SubscribeFeature.vue'
import FeatureEnabledIcon from '@img/FeatureEnabledIcon.vue'
import FeatureDisabledIcon from '@img/FeatureDisabledIcon.vue'
import ExtraIcon from '@img/ExtraIcon.vue'
</script>

<template>
  <article class="subscribe-card card">
    <div class="subscribe-card-content">
      <h1 class="subscribe-card__title"><slot name="title"></slot></h1>
      <p class="subscribe-card__lore"><slot name="lore"></slot></p>
      <div class="subscribe-card__features">
        <subscribe-feature v-for="(text, index) in subscriptionTexts" :key="index">
          <template v-if="index<activeFeatures" #icon><feature-enabled-icon></feature-enabled-icon></template>
          <template v-else #icon><feature-disabled-icon></feature-disabled-icon></template>
          <template v-if="index<activeFeatures" #text>{{ text }}</template>
          <template v-else #text><span class="gray-span">{{text }}</span></template>
        </subscribe-feature>
      </div>
      <hr v-if="extraFeatures !== undefined && extraFeatures.length != 0"/>
      <subscribe-feature v-for="(text, index) in extraFeatures" :key="index">
        <template #icon><extra-icon></extra-icon></template>
        <template #text>{{ text }}</template>
      </subscribe-feature>
    </div>
    <div class="price-block">
      <hr/>
      <h1 class="subscribe-card__price"><slot name="price"></slot></h1>
    </div>
  </article>
</template>

<script>
export default {
  data: function() {
    return{
      subscriptionTexts: [
        "Поддержка и развитие сайта",
        "Проектирование сайта",
        "Дизайн сайта",
        "Программирование сайта",
        "HTML - верстка сайта",
        "Тестирование сайта",
        "Настройка рекламы",
        "Фирменный стиль",
        "Разработка логотипа"
      ]
    }
  },
  props: {
    activeFeatures: {
      type: Number
    },
    extraFeatures: {
      type: Array
    }
  }
}
</script>

<style scoped>
  .subscribe-card{
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid black;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .subscribe-card__features{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .subscribe-card__title{
    font-size: 40px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: 1px;
    text-align: left;
    color: #263238;
  }
  .subscribe-card__lore{
    font-size: 22px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: left;
  }
  .subscribe-card__price{
    font-size: 50px;
    font-weight: 600;
    line-height: 54px;
    letter-spacing: 1px;
    text-align: left;
  }
  .subscribe-card-content{

  }
  .price-block{

  }
  .ability-number{
    color: var(--purple);
  }
  .gray-span{
    color: #666;
  }
</style>