<!-- Блок хедера, если глядеть в терминах БЭМ. -->
<script setup>
import LeftMenu from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
</script>

<template>
  <div class="global-container">
    <div class="main-header">
      <div class="main-header-content">
        <left-menu></left-menu>
        <right-menu></right-menu>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
  .main-header-content{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>