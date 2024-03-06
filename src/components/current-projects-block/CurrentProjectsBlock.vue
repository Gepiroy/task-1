<script setup>
import TripleBlock from "../TripleBlock.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";
import db from '@/pseudo_back/db.js';
</script>

<template>
  <div class = "current-projects-block">
    <triple-block title="Текущие проекты по поддержке сайтов">
      <current-project-card v-for="(card, index) in cards" :key="index" :title="card.title">
        <template #image><img :src="card.image" :alt="card.title"/></template>
      </current-project-card>
    </triple-block>
    <div class="global-container"><button class="show-more-button">Показать ещё</button></div>
  </div>
</template>

<style>
.current-projects-block{
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}
@media(max-width:1023px){
  .current-projects-block{
    align-items: start;
    gap: 30px;
  }
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
      this.cards = await db.getCard("project");
    }
  }
</script>