<script setup>
</script>

<template>
  <article class="current-project-card card">
    <div class="current-project-body">
      <slot name="image"></slot>
      <button>Сайты</button>
    </div>
    <h1 class="current-project-card__title">{{ title }}</h1>
  </article>
</template>

<style scoped>
  .current-project-card{
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 25px;
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
    justify-content: center;
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
    bottom: 18px;
    left: 18px;
    border: 0;
    background: #e6e6e6;
    border-radius: 4px;
    padding: 5px 23px;
    color: #676F73;
  }
  .current-project-body :slotted(img){
    max-height: 80%;
    max-width: 80%;
  }
  @media(max-width:1023px){
    .current-project-body{
      height: 250px;
    }
    .current-project-card__title{
      font-size: 20px;
      line-height: 24px;
    }
    .current-project-card{
      display: flex;
      flex-direction: column;
      align-items: left;
      gap: 15px;
    }
    .current-project-body button{
      bottom: 12px;
      left: 12px;
      border-radius: 2px;
      padding: 4px 18px;
    }
  }
</style>
<script>
export default {
  props: ['title']
}
</script>