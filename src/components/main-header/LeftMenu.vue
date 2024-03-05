<script setup>
import IconLogo from "@img/IconLogo.vue";
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
    <div class="dropdown-container desktop">
      <button class="left-menu__item left-menu__dropdown" >УСЛУГИ
        <img src="@img/DropdownArrow.svg"></img>
      </button>
      <div class="dropdown-content">
        <a href="#">Can do</a>
        <a href="#">Those styles</a>
        <a href="#">Later</a>
      </div>
    </div>
    <a class="left-menu__item desktop" href="some-href">
      КОНТАКТЫ
    </a>
  </nav>
</template>

<style scoped>
  .dropdown-container{
    float: left;
    overflow: hidden;
  }
  .dropdown-container:hover .dropdown-content{
    display:flex;
    flex-direction: column;
  }
  .dropdown-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 4px;
    border-radius: 4px;
  }
  .left-menu__dropdown{
    display: flex;
    gap: 8px;
    background-color: transparent;
    border: none;
    outline: none;
    align-items: center;
    cursor: pointer;
  }
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
  @media(max-width:1024px){
    nav{
      display: none;
    }
  }
</style>