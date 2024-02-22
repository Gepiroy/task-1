<script setup>
import LeftMenuItem from "./LeftMenuItem.vue";
import IconLogo from "../icons/IconLogo.vue";
</script>

<template>
  <div class="menu">
    <left-menu-item>
      <template #item><icon-logo></icon-logo></template>
    </left-menu-item>
    <left-menu-item>
      <template #item>ПОРТФОЛИО</template>
    </left-menu-item>
    <left-menu-item>
      <template #item>О КОМПАНИИ</template>
    </left-menu-item>
    <left-menu-item>
      <template #item>УСЛУГИ</template>
    </left-menu-item>
    <left-menu-item>
      <template #item>КОНТАКТЫ</template>
    </left-menu-item>
  </div>
</template>

<style scoped>
  .menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>