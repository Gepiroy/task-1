<script setup>
import MainHeader from './components/main-header/MainHeader.vue';
import FirstBlock from './components/first-block/FirstBlock.vue';
import SecondBlock from './components/second-block/SecondBlock.vue';
import TechnologiesBlock from './components/technologies-block/TechnologiesBlock.vue';
import AbilitiesBlock from './components/abilities-block/AbilitiesBlock.vue';
import SubscribesBlock from './components/subscribes-block/SubscribesBlock.vue';
import CurrentProjectsBlock from './components/current-projects-block/CurrentProjectsBlock.vue';
</script>

<template>
  <body>
    <main-header></main-header>
    <hr/>
    <first-block></first-block>
    <second-block></second-block>
    <technologies-block></technologies-block>
    <abilities-block></abilities-block>
    <subscribes-block></subscribes-block>
    <current-projects-block></current-projects-block>
  </body>
</template>

<script>

</script>


<style scoped>
body{
  padding: 0px 80px;
}
</style>
