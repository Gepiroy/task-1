<script setup>
import RightMenuButton from "@c/DiscussProjectButton.vue";
</script>

<template>
  <div class="menu">
    <p class="menu__phone-number"><span style="color: var(--purple)">8 (800)</span> 350 93 98</p>
    <right-menu-button></right-menu-button>
  </div>
</template>

<style scoped>
  .menu{
    display: flex;
    justify-content: right;
    padding: 14px;
    gap: 4rem;
  }
  .menu__phone-number{
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>