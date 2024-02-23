<script setup>
import MainHeader from './components/main-header/MainHeader.vue';
import FirstBlock from './components/first-block/FirstBlock.vue';
import SecondBlock from './components/second-block/SecondBlock.vue';
import TechnologiesBlock from './components/technologies-block/TechnologiesBlock.vue';
import AbilitiesBlock from './components/abilities-block/AbilitiesBlock.vue';
import SubscribesBlock from './components/subscribes-block/SubscribesBlock.vue';
import CurrentProjectsBlock from './components/current-projects-block/CurrentProjectsBlock.vue';
import FooterBlock from './components/footer-block/FooterBlock.vue';
</script>

<template>
  <main>
    <main-header></main-header>
    <hr/>
    <first-block></first-block>
    <second-block></second-block>
    <technologies-block></technologies-block>
    <abilities-block></abilities-block>
    <subscribes-block></subscribes-block>
    <current-projects-block></current-projects-block>
  </main>
  <footer-block></footer-block>
</template>

<script>

</script>


<style scoped>
main{
  display: flex;
  flex-direction: column;
  padding: 0px 80px;
  gap: 8rem;
}
</style>
