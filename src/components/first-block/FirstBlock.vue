<script setup>
import DiscussProjectButton from "../DiscussProjectButton.vue";
</script>

<template>
  <div class="global-container">
    <section class="first-block">
      <artcicle class="supporting-sites">
        <h1>ПОДДЕРЖКА САЙТОВ</h1>
        <p>Решаем все технические вопросы, чтобы вы могли сосредоточиться <span style="color: var(--purple);">на своём бизнесе.</span></p>
        <discuss-project-button></discuss-project-button>
      </artcicle>
      <img src="@/assets/img/GroupOfThings.svg" class="first-block__image">
    </section>
  </div>
</template>

<style scoped>
  .first-block{
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    margin: 50px 0 0 0;
  }
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

  @media(max-width:1023px){
    .first-block{
      display: flex;
      flex-direction: column;
    }
    .first-block__image{
      display: none;
    }
    .supporting-sites h1{
      font-size: 40px;
      line-height: 48px;
    }
    .supporting-sites p{
      font-size: 16px;
      line-height: 19px;
      margin: 15px 0 30px 0;
    }
  }
</style>