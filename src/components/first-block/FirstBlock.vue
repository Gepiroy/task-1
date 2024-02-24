<script setup>
import GroupOfThings from '../icons/GroupOfThings.vue';
import SupportingSites from './SupportingSites.vue';
</script>

<template>
  <div class="first-block">
    <supporting-sites></supporting-sites>
    <group-of-things></group-of-things>
  </div>
</template>

<style scoped>
  .first-block{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>