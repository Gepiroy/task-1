<script setup>
import TripleBlock from "../TripleBlock.vue";
import CurrentProjectCard from "./CurrentProjectCard.vue";
</script>

<template>
  <div class = "current-projects-block">
    <triple-block>
      <template #title>Текущие проекты по поддержке сайтов</template>
      <template #grid-content>
        <current-project-card>
          <template #title>Сайт Аппарель</template>
          <template #image><img src="@img/notebooks.png" alt=""/></template>
          <template #price>15 000</template>
        </current-project-card>
        <current-project-card>
          <template #title>Сайт Музея</template>
          <template #image><img src="@img/notebooks.png"/></template>
          <template #price>30 000</template>
        </current-project-card>
        <current-project-card>
          <template #title>Сайт Тёплый день</template>
          <template #image><img src="@img/warm-day.png"/></template>
          <template #price>50 000</template>
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