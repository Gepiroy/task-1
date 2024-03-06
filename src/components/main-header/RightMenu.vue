<script setup>
import RightMenuButton from "@c/DiscussProjectButton.vue";
</script>

<template>
  <div class="right-menu desktop">
    <p class="menu__phone-number"><span style="color: var(--purple)">8 (800)</span> 350 93 98</p>
    <right-menu-button></right-menu-button>
  </div>
  <div class="right-menu mobile">
    <img src="@img/MobileMenu.svg">
  </div>
</template>

<style scoped>
  .right-menu{
    display: flex;
    justify-content: right;
    align-items: flex-end;
    gap: 42px;
  }
  .menu__phone-number{
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  @media screen and (min-width: 1024px){
    .right-menu{
      align-items: center;
    }
  }
</style>