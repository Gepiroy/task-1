<script setup>
import TripleBlock from "../TripleBlock.vue";
import SubscribeCard from "./SubscribeCard.vue";
</script>

<template>
  <triple-block
    title="Пакеты подписок"
    comment="Наша команда готова взять на себя все технические и операционные задачи, связанные с вашим сайтом, чтобы вы могли сосредоточиться на развитии своего бизнеса."
  >
    <subscribe-card
      title="Лайт"
      lore="10 часов в месяц"
      activeFeatures="6"
      price="15 000"
    />
    <subscribe-card
      title="Мидл"
      lore="21 час в месяц"
      activeFeatures="7"
      price="30 000"
    />
    <subscribe-card
      title="Хард"
      lore="36 часов в месяц"
      activeFeatures="9"
      :extraFeatures="[
        'Перенос неиспользованных часов в следующий месяц (но не более одного раза в квартал)',
      ]"
      price="50 000"
    />
  </triple-block>
</template>