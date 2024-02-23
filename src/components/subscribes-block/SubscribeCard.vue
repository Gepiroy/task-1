<script setup>
import SubscribeFeature from './SubscribeFeature.vue'
import FeatureEnabledIcon from './icons/FeatureEnabledIcon.vue'
import FeatureDisabledIcon from './icons/FeatureDisabledIcon.vue'
import ExtraIcon from './icons/ExtraIcon.vue'
</script>

<template>
  <div class="subscribe-card">
    <div class="subscribe-card-content">
      <h1><slot name="title"></slot></h1>
      <p><slot name="lore"></slot></p>
      <subscribe-feature v-for="(text, index) in subscriptionTexts" :key="index">
        <template v-if="index<activeFeatures" #icon><feature-enabled-icon></feature-enabled-icon></template>
        <template v-else #icon><feature-disabled-icon></feature-disabled-icon></template>
        <template v-if="index<activeFeatures" #text>{{ text }}</template>
        <template v-else #text><span class="gray-span">{{text }}</span></template>
      </subscribe-feature>
      <hr v-if="extraFeatures !== undefined && extraFeatures.length != 0"/>
      <subscribe-feature v-for="(text, index) in extraFeatures" :key="index">
        <template #icon><extra-icon></extra-icon></template>
        <template #text>{{ text }}</template>
      </subscribe-feature>
    </div>
    <div class="price-block">
      <hr/>
      <h1><slot name="price"></slot></h1>
    </div>
  </div>
</template>

<script>
export default{
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
    border-radius: 4px;
    border: 1px solid black;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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