<script setup>
import SecondBlockCard from './SecondBlockCard.vue';
import TripleBlock from "@c/TripleBlock.vue";
import axios from 'axios';
//import { ref } from 'vue';
//const cards = ref(null);
</script>

<template>
  <triple-block>
    <SecondBlockCard v-for="(card, index) in cards" :key="index">
      <template #icon><img :src="card.icon"></template>
      <template #title>{{ card.title }}</template>
      <template #lore>{{ card.lore }}</template>
    </SecondBlockCard>
  </triple-block>
</template>

<style scoped>
  .second-block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
</style>

<script>
export default {
  data () {
    return {
      cards: null
    };
  },
  mounted () {
    axios
    .get("http://localhost/task-2/wp-json/task-2/v1/benefit")
    .then((res) => {
      this.cards = res.data
    })
  }
}
</script>