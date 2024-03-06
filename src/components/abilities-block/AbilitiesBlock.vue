<script setup>
import TripleBlock from "../TripleBlock.vue";
import AbilityCard from "./AbilityCard.vue";
import db from '@/pseudo_back/db.js';
</script>

<template>
  <triple-block title='Возможности'>
    <ability-card v-for="(data, index) in cards" :key="index">
      <template #number>{{ (index+1).toString().padStart(2, '0') }}</template>
      <template #title>{{ data.title }}</template>
      <template #lore>{{ data.lore }}</template>
    </ability-card>
  </triple-block>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {
        cards: null
      }
    },
    async mounted() {
      this.cards = await db.getCard("abilities");
    }
  }
</script>