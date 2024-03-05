<script setup>
import DiscussProjectButton from "../DiscussProjectButton.vue";
</script>

<template>
  <div class="supporting-sites">
    <h1>ПОДДЕРЖКА САЙТОВ</h1>
    <p>Решаем все технические вопросы, чтобы вы могли сосредоточиться <span style="color: var(--purple)">на своём бизнесе.</span></p>
    <discuss-project-button></discuss-project-button>
  </div>
</template>

<style scoped>
  .supporting-sites{
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .supporting-sites h1{
    font-size: 64px;
    font-weight: 700;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: left;
    color: #263238;
    margin: 0;
  }
  .supporting-sites p{
    font-size: 26px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #676F73;
    margin: 20px 0 80px 0;
  }
</style>