<script setup>
import TripleBlock from "../TripleBlock.vue";
import AbilityCard from "./AbilityCard.vue";
</script>

<template>
  <triple-block>
    <template #title>Возможности</template>
    <template #grid-content>
      <ability-card v-for="(data, index) in cards" :key="index">
        <template #number>{{ (index+1).toString().padStart(2, '0') }}</template>
        <template #title>{{ data.title }}</template>
        <template #lore>{{ data.lore }}</template>
      </ability-card>
    </template>
  </triple-block>
</template>

<style>

</style>

<script>
  import cards from './cards.js'
  export default {
    data: function(){
      return {
        cards: cards
      }
    }
  }
</script>