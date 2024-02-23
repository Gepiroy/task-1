<script setup>
import TripleBlock from "../TripleBlock.vue";
import SubscribeCard from "./SubscribeCard.vue";
</script>

<template>
  <triple-block>
    <template #title>Пакеты подписок</template>
    <template #comment>Наша команда готова взять на себя все технические и операционные задачи, связанные 
с вашим сайтом, чтобы вы могли сосредоточиться на развитии своего бизнеса.</template>
    <template #grid-content>
      <subscribe-card activeFeatures="6">
        <template #title>Лайт</template>
        <template #lore>10 часов в месяц</template>
        <template #price>15 000 ₽</template>
      </subscribe-card>
      <subscribe-card activeFeatures="7">
        <template #title>Мидл</template>
        <template #lore>21 час в месяц</template>
        <template #price>30 000 ₽</template>
      </subscribe-card>
      <subscribe-card activeFeatures="9" :extraFeatures="['Перенос неиспользованных часов в следующий месяц (но не более одно раза в квартал)']">
        <template #title>Хард</template>
        <template #lore>36 часов в месяц</template>
        <template #price><span style="color:var(--purple)">50 000 ₽</span></template>
      </subscribe-card>
    </template>
  </triple-block>
</template>

<style>

</style>