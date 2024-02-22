<template>
  <div class="ability-card">
    <h1 class="ability-number"><slot name="number"></slot></h1>
    <h3><slot name="title"></slot></h3>
    <p><slot name="lore"></slot></p>
  </div>
</template>

<style scoped>
  .ability-number{
    color: var(--purple);
  }
</style>