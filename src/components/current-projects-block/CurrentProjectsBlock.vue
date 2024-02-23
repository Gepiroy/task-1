<script setup>
import TripleBlock from "../TripleBlock.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";
</script>

<template>
  <triple-block>
    <template #title>Текущие проекты по поддержке сайтов</template>
    <template #grid-content>
      <current-project-card>
        <template #title>Сайт Аппареля</template>
        <template #image><img src="./img/notebooks.png" alt=""/></template>
        <template #price>15 000</template>
      </current-project-card>
      <current-project-card>
        <template #title>Сайт Музея</template>
        <template #image><img src="./img/notebooks.png"/></template>
        <template #price>30 000</template>
      </current-project-card>
      <current-project-card>
        <template #title>Сайт Тёплый день</template>
        <template #image><img src="./img/warm-day.png"/></template>
        <template #price>50 000</template>
      </current-project-card>
    </template>
  </triple-block>
</template>

<style>

</style>