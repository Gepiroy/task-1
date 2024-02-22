<!-- Блок хедера, если глядеть в терминах БЭМ. -->
<script setup>
import LeftMenu from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
</script>

<template>
  <div class="main-header">
    <div class="first-grid-div">
      <left-menu></left-menu>
    </div>
    <div class="second-grid-div">
      <right-menu></right-menu>
    </div>
  </div>
</template>

<style scoped>
  .main-header{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>