<script setup>
import TripleBlock from "@c/TripleBlock.vue";
import TechnologyCard from "./TechnologyCard.vue";
</script>

<template>
  <triple-block>
    <template #title>Технологии</template>
      <technology-card v-for="(card, index) in cards" :key="index">
        <template #icon><img :src="card.icon"/></template>
        <template #title>{{ card.title }}</template>
        <template #lore>{{ card.lore }}</template>
      </technology-card>
  </triple-block>
</template>

<style>

</style>

<script>
  import cards from './technologies.js'
  export default {
    data: function(){
      return {
        cards: cards
      }
    }
  }
</script>