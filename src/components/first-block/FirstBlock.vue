<script setup>
import GroupOfThings from '../icons/GroupOfThings.vue';
import SupportingSites from './SupportingSites.vue';
</script>

<template>
  <div class="first-block">
    <div class="first-grid-div">
      <supporting-sites></supporting-sites>
    </div>
    <div class="second-grid-div">
      <group-of-things></group-of-things>
    </div>
  </div>
</template>

<style scoped>
  .first-block{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>