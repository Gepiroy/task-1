<script setup>
import FirstBlock from '@c/first-block/FirstBlock.vue';
import SecondBlock from '@c/second-block/SecondBlock.vue';
import TechnologiesBlock from '@c/technologies-block/TechnologiesBlock.vue';
import AbilitiesBlock from '@c/abilities-block/AbilitiesBlock.vue';
import SubscribesBlock from '@c/subscribes-block/SubscribesBlock.vue';
import CurrentProjectsBlock from '@c/current-projects-block/CurrentProjectsBlock.vue';
import BaseLayout from '@c/BaseLayout.vue';
</script>

<template>
  <base-layout>
    <hr/>
    <first-block/>
    <second-block/>
    <technologies-block/>
    <abilities-block/>
    <subscribes-block/>
    <current-projects-block/>
  </base-layout>
</template>