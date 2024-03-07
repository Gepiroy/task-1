<!-- Блок хедера, если глядеть в терминах БЭМ. -->
<script setup>
import LeftMenu from './LeftMenu.vue';
import RightMenu from './RightMenu.vue';
</script>

<template>
  <div class="main-header">
    <div class="main-header-content">
      <left-menu></left-menu>
      <right-menu></right-menu>
    </div>
  </div>
</template>

<style scoped>
  .main-header{
    border-bottom: 1px solid #2632384D;
  }
  .main-header-content{
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 20px 30px;
    height: 57px;
  }

  @media screen and (min-width: 1200px){
    .main-header{
      margin: 0 var(--page-padding);
    }
    .main-header-content{
      display: grid;
      grid-template-columns: 50% 50%;
      align-items: center;
      height: auto;
    }
  }
</style>