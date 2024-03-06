<script setup>
import TripleBlock from "@c/TripleBlock.vue";
import TechnologyCard from "./TechnologyCard.vue";
import db from '@/pseudo_back/db.js';
</script>

<template>
  <div class="technologies-block-wrapper">
    <triple-block title="Технологии">
        <technology-card v-for="(card, index) in cards" :key="index" :title="card.title" :lore="card.lore">
          <template #icon><img :src="card.icon" :alt="card.title" style="width:100%; height:100%;"/></template>
        </technology-card>
    </triple-block>
    <div class="global-container">
      <button class="show-more-button mobile">Показать еще</button>
    </div>
  </div>
</template>

<style scoped>
  .technologies-block-wrapper{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
</style>

<script>
  export default {
    data() {
      return {
        cards: null
      }
    },
    async mounted() {
      this.cards = await db.getCard("technologies");
    }
  }
</script>