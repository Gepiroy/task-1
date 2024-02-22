<template>
  <div class="technology-card">
    <slot name="icon"></slot>
    <div>
      <h3><slot name="title"></slot></h3>
      <p><slot name="lore"></slot></p>
    </div>
  </div>
</template>

<style scoped>
.technology-card{
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
}
</style>