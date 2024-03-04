<template>
  <article class="technology-card card">
    <slot name="icon"></slot>
    <div class="technology-card-texts">
      <h3 class="technology-card__title"><slot name="title"></slot></h3>
      <p class="technology-card__lore"><slot name="lore"></slot></p>
    </div>
  </article>
</template>

<style scoped>
.technology-card{
  display: grid;
  justify-content: left;
  grid-template-columns: 72px 1fr;
  gap: 68px;
  align-items: center;
}
.technology-card-texts{
  display: flex;
  flex-direction: column;
}

.technology-card__title{
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 1px;
  text-align: left;
  color: #263238;
  margin: 0;
}

.technology-card__lore{
  font-size: 16px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 1px;
  text-align: left;
  margin: 0;

  color: #676F73;
}


</style>