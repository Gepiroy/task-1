<!-- Элемент меню, если глядеть в терминах БЭМ. -->

<template>
  <div class="header__menu_item">
    <h3><slot name="item"></slot></h3>
  </div>
</template>

<style scoped>
  .header__menu_item{
    color: #444;
  }
</style>