<script setup>
import TripleBlock from "../TripleBlock.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";
import axios from 'axios';
</script>

<template>
  <div class = "current-projects-block">
    <triple-block title="Текущие проекты по поддержке сайтов">
      <current-project-card v-for="(card, index) in cards" :key="index" :title="card.title">
        <template #image><img :src="card.image" :alt="card.title"/></template>
      </current-project-card>
    </triple-block>
    <button class="show-more-button">Показать ещё</button>
  </div>
</template>

<style>
.current-projects-block{
  display:flex;
  flex-direction: column;
  align-items: center;
}
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
      .get("http://localhost/task-2/wp-json/task-2/v1/project")
      .then((res) => {
        this.cards = res.data
      })
    }
  }
</script>