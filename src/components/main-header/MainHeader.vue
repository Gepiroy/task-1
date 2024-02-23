<!-- Блок хедера, если глядеть в терминах БЭМ. -->
<script setup>
import LeftMenu from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
</script>

<template>
  <div class="main-header">
    <div class="main-header-content">
      <div class="first-grid-div">
        <left-menu></left-menu>
      </div>
      <div class="second-grid-div">
        <right-menu></right-menu>
      </div>
    </div>
    <hr />
  </div>
</template>

<style scoped>
  .main-header{
    padding: 0 80px;
  }
  .main-header-content{
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>