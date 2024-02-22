<script setup>
import TripleBlock from "../TripleBlock.vue";
import AbilityCard from "./AbilityCard.vue";
</script>

<template>
  <triple-block>
    <template #title>Возможности</template>
    <template #grid-content>
      <ability-card>
        <template #number>1</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>2</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>3</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>4</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>5</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>6</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>7</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>8</template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </ability-card>
      <ability-card>
        <template #number>9</template>
        <template #title>later</template>
        <template #lore>Вообще по-хорошему для DRY инфу парсить с бэка и через v-for клепать, хотя какой бек для статичного блока сайта-визитки...</template>
      </ability-card>
    </template>
  </triple-block>
</template>

<style>

</style>