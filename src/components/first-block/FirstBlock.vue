<script setup>
import GroupOfThings from '@img/GroupOfThings.vue';
import SupportingSites from './SupportingSites.vue';
</script>

<template>
  <div class="global-container">
    <section class="first-block">
      <supporting-sites></supporting-sites>
      <div class="first-block__image"><group-of-things></group-of-things></div>
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

  @media(max-width:1023px){
    .first-block{
      display: flex;
      flex-direction: column;
    }
    .first-block__image{
      display: none;
    }
  }
</style>