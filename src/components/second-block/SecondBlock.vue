<script setup>
import SecondBlockCard from './SecondBlockCard.vue';
import TripleBlock from "@c/TripleBlock.vue";
import db from '@/pseudo_back/db.js';
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
  async mounted() {
    this.cards = await db.getCard("benefit");
  }
}
</script>