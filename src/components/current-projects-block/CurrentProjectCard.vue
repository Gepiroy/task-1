<script setup>
</script>

<template>
  <div class="current-project-card">
    <div class="current-project-body">
      <slot name="image"></slot>
      <button>Сайты</button>
    </div>
    <h1><slot name="title"></slot></h1>
  </div>
</template>

<style scoped>
  .current-project-card{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .current-project-body{
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid black;
    height: 350px;
    width: 100%;
    align-items: center;
  }
  .current-project-body button{
    position: absolute;
    align-self: flex-start;
    justify-self: end;
    bottom: 1.5rem;
    left: 1.5rem;
  }
  .current-project-body :slotted(img){
    max-height: 100%;
    max-width: 100%;
  }
</style>