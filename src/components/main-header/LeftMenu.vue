<script setup>
import IconLogo from "@img/IconLogo.vue";
import MenuDropdown from "@c/MenuDropdown.vue";
</script>

<template>
  <nav class="left-menu">
    <a class="left-menu__item" href="some-href">
      <icon-logo></icon-logo>
    </a>
    <a class="left-menu__item desktop" href="some-href">
      ПОРТФОЛИО
    </a>
    <a class="left-menu__item desktop" href="some-href">
      О КОМПАНИИ
    </a>
    <menu-dropdown title="УСЛУГИ" class="desktop">
      <a href="#">Can do</a>
      <a href="#">Those styles</a>
      <a href="#">Later</a>
    </menu-dropdown>
    <a class="left-menu__item desktop" href="some-href">
      КОНТАКТЫ
    </a>
  </nav>
</template>

<style scoped>
  .left-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .left-menu__item{
    color: #676F73;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0.8399999737739563px;
    text-align: left;
    text-decoration: none;
  }
  @media(max-width:1023px){
    .left-menu{
      align-items: start;
    }
    nav{
      display: none;
    }
  }
</style>