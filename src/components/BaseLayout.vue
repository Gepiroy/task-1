<script setup>
import MainHeader from '@c/main-header/MainHeader.vue';
import FooterBlock from '@c/footer-block/FooterBlock.vue';
</script>

<template>
  <header>
    <slot name="header"><main-header></main-header></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"><footer-block></footer-block></slot>
  </footer>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  gap: 180px;
}
@media screen and (min-width: 1024px) {
  main{
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin: 100px 0 0 0;
  }
}
</style>