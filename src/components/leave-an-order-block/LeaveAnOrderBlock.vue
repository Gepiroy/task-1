<script setup>
import Arrow from './svg/Arrow.vue';
</script>

<template>
  <div class="leave-an-order-block">
    <h1 class="leave-an-order-block__text">оставьте заявку на поддержку сайта</h1>
    <div class="leave-an-order-block__arrow"><Arrow></Arrow></div>

  </div>
</template>

<style scoped>
.leave-an-order-block{
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  
  background: var(--purple);
}
.leave-an-order-block__text{
  font-size: 64px;
  font-weight: 600;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
}
</style>