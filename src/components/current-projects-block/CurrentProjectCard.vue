<script setup>
</script>

<template>
  <div class="current-project-card card">
    <div class="current-project-body">
      <slot name="image"></slot>
      <button>Сайты</button>
    </div>
    <h1 class="current-project-card__title"><slot name="title"></slot></h1>
  </div>
</template>

<style scoped>
  .current-project-card{
    display: flex;
    flex-direction: column;
    align-items: left;
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
  .current-project-card__title{
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }
  .current-project-body button{
    position: absolute;
    align-self: flex-start;
    justify-self: end;
    bottom: 1.5rem;
    left: 1.5rem;
    border: 0;
    background: #e6e6e6;
    border-radius: 4px;
    padding: 5px 23px;
    color: #676F73;
  }
  .current-project-body :slotted(img){
    max-height: 100%;
    max-width: 100%;
  }
</style>