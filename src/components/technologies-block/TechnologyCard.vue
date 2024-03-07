<template>
  <article class="technology-card card">
    <slot name="icon"></slot>
    <div class="technology-card-texts">
      <h3 class="technology-card__title">{{ title }}</h3>
      <p class="technology-card__lore">{{ lore }}</p>
    </div>
  </article>
</template>

<style scoped>
.technology-card{
  display: grid;
  justify-content: left;
  grid-template-columns: 30px 1fr;
  gap: 40px;
  align-items: center;
}
.technology-card-texts{
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.technology-card__title{
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: left;
  color: #263238;
}

.technology-card__lore{
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 1px;
  text-align: left;
  color: #676F73;
}

@media(min-width: 1200px){
  .technology-card{
    grid-template-columns: 72px 1fr;
    gap: 68px;
  }

  .technology-card__title{
    font-size: 30px;
    line-height: 32px;
  }

  .technology-card__lore{
    font-size: 16px;
    line-height: 17px;
  }
}
</style>

<script>
  export default {
  props: {
    title: String,
    lore: String
  }
}
</script>