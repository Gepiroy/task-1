<script setup>
import SecondBlockCard from './SecondBlockCard.vue';
import TripleBlock from "@c/TripleBlock.vue";
import axios from 'axios';
</script>

<template>
  <triple-block body_style="no-mobile-gap">
    <SecondBlockCard v-for="(card, index) in cards" :key="index" :title="card.title" :lore="card.lore">
      <template #icon><img style="width: 100%; height: 100%;" :src="card.icon"></template>
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