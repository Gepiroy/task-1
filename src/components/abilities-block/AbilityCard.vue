<template>
  <article class="ability-card card">
    <div class="ability-title">
      <h1 class="ability-number"><slot name="number"></slot></h1>
    </div>
    <h3 class="ability-card__title"><slot name="title"></slot></h3>
    <p class="ability-card__lore"><slot name="lore"></slot></p>
  </article>
</template>

<style scoped>
  .ability-card{
    gap: 20px;
  }
  .ability-card__title{
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0;
    text-align: left;
    color: #263238;
  }
  .ability-card__lore{
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;

    color: #676F73;
  }
  .ability-title{ /* Номеру нужен холдер, который будет relative (not-static), для отрисовки линии. */
    position: relative;
  }
  .ability-number{
    font-size: 48px;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0.06em;
    text-align: left;
    color: var(--purple);
    margin: 0;
  }
  .ability-number:after{
    content: " ";
    height: 2px;
    margin-left: 84px;
    width: calc(100% - 84px);
    position: absolute;
    top: 50%;
    left: 0;
    background: var(--purple);
  }
</style>