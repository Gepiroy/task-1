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
      <hr class="main-header__line"/>
    </div>
  </div>
</template>

<style scoped>
  .main-header-content{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .main-header__line{
    border: 1px solid #2632384D;
  }
</style>