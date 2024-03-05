<script setup>
import TripleBlock from "../TripleBlock.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";
import axios from 'axios';
</script>

<template>
  <div class = "current-projects-block">
    <triple-block title="Текущие проекты по поддержке сайтов">
      <template #grid-content>
        <current-project-card v-for="(card, index) in cards" :key="index" :title="card.title">
          <template #image><img :src="card.image" :alt="card.title"/></template>
        </current-project-card>
      </template>
    </triple-block>
    <button class="current-projects-block__show-more">Показать ещё</button>
  </div>
</template>

<style>
.current-projects-block{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.current-projects-block__show-more{
  border-radius: 4px;
  border: 1px solid var(--purple);
  background: transparent;
  padding: 29px 85px;
  
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #263238;
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