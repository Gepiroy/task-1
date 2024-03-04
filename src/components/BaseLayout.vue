<script setup>
import MainHeader from '@c/main-header/MainHeader.vue';
import FooterBlock from '@c/footer-block/FooterBlock.vue';
</script>

<template>
  <div class="container">
    <header>
      <slot name="header"><main-header></main-header></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"><footer-block></footer-block></slot>
    </footer>
  </div>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  gap: 8rem;
}
@media(min-width:1024px){
  main{
    display: flex;
    flex-direction: column;
    padding: 0px 80px;
    gap: 8rem;
  }
}
</style>