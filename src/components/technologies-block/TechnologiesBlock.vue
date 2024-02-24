<script setup>
import TripleBlock from "@c/TripleBlock.vue";
import TechnologyCard from "./TechnologyCard.vue";
import CssIcon from "./icons/CssIcon.vue";
</script>

<template>
  <triple-block>
    <template #title>Технологии</template>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>CSS</template>
        <template #lore>Язык программирования</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>I'll write it all later...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>...</template>
      </technology-card>
      <technology-card>
        <template #icon><css-icon></css-icon></template>
        <template #title>later</template>
        <template #lore>...</template>
      </technology-card>
  </triple-block>
</template>

<style>

</style>