<script setup>
import SecondBlockCard from './SecondBlockCard.vue';

</script>

<template>
  <div class="second-block">
    <div>
      <SecondBlockCard>
        <template #icon></template>
        <template #title>КОНКУРЕНТОСПОСОБНОСТЬ</template>
        <template #lore>Мы понимаем, что Ваше время
и бюджет являются важными факторами при выборе веб-студии, благодаря нашим конкурентоспособным ценам Вам не придется выходить за рамки бюджета, чтобы получить высококачественный сервис.</template>
      </SecondBlockCard>
    </div>
    <div>
      <SecondBlockCard>
        <template #icon></template>
        <template #title>КАЧЕСТВО</template>
        <template #lore>Наша команда состоит из профессионалов, которые имеют большой опыт в разработке сайтов. Мы используем только современные технологии
и инструменты, чтобы создать сайт, который будет не только красивым и удобным для пользователей,
но и эффективным для вашего бизнеса.</template>
      </SecondBlockCard>
    </div>
    <div>
      <SecondBlockCard>
        <template #icon></template>
        <template #title>КЛИЕНТООРИЕНТИРОВАННОСТЬ</template>
        <template #lore>Мы предлагаем полный цикл разработки сайта, начиная
от анализа вашего бизнеса
и конкурентов, до создания дизайна, написания контента
и программирования. Мы гарантируем высокое качество работы и соблюдение сроков.</template>
      </SecondBlockCard>
    </div>
  </div>
</template>

<style scoped>
  .second-block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>