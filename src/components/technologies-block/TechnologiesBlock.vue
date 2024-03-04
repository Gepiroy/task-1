<script setup>
import TripleBlock from "@c/TripleBlock.vue";
import TechnologyCard from "./TechnologyCard.vue";
import axios from 'axios';
</script>

<template>
  <triple-block title="Технологии">
      <technology-card v-for="(card, index) in cards" :key="index">
        <template #icon><img :src="card.icon" :alt="card.title"/></template>
        <template #title>{{ card.title }}</template>
        <template #lore>{{ card.lore }}</template>
      </technology-card>
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
    mounted() {
      axios
      .get("http://localhost/task-2/wp-json/task-2/v1/technologies")
      .then((res) => {
        this.cards = res.data
      })
    }
  }
</script>