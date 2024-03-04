<script setup>
import TripleBlock from "../TripleBlock.vue";
import SubscribeCard from "./SubscribeCard.vue";
</script>

<template>
  <triple-block title="Пакеты подписок" comment="Наша команда готова взять на себя все технические и операционные задачи, связанные с вашим сайтом, чтобы вы могли сосредоточиться на развитии своего бизнеса.">
    <subscribe-card activeFeatures="6" price="15 000">
      <template #title>Лайт</template>
      <template #lore>10 часов в месяц</template>
    </subscribe-card>
    <subscribe-card activeFeatures="7" price="30 000">
      <template #title>Мидл</template>
      <template #lore>21 час в месяц</template>
    </subscribe-card>
    <subscribe-card activeFeatures="9" :extraFeatures="['Перенос неиспользованных часов в следующий месяц (но не более одно раза в квартал)']" price="50 000">
      <template #title>Хард</template>
      <template #lore>36 часов в месяц</template>
    </subscribe-card>
  </triple-block>
</template>

<style>

</style>