<script setup>
import TripleBlock from "../TripleBlock.vue";
import AbilityCard from "./AbilityCard.vue";
import axios from "axios";
</script>

<template>
  <triple-block title='Возможности'>
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
  export default {
    data() {
      return {
        cards: null
      }
    },
    mounted() {
      axios
      .get("http://localhost/task-2/wp-json/task-2/v1/abilities")
      .then((res) => {
        this.cards = res.data
      })
    }
  }
</script>