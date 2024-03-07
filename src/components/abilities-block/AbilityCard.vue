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
    display: flex;
    flex-direction: column;
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
    margin-left: 84px;
    height: 2px;
    width: calc(100% - 84px);
    position: absolute;
    top: 50%;
    left: 0;
    background: var(--purple);
  }

  @media(max-width: 1199px){ /* Mobile first - забью на этом проекте, а то много кода носить не туда. */
    .ability-card{
      gap: 10px;
    }
    .ability-number{
      font-size: 20px;
      font-weight: 700;
      line-height: 15px;
    }
    .ability-number:after{
      margin-left: 40px;
      width: calc(100% - 40px);
      height: 1px;
    }
    .ability-card__title{
      font-size: 18px;
      line-height: 22px;
    }
    .ability-card__lore{
      font-size: 16px;
      line-height: 19px;
      background-image: linear-gradient(162.85deg, #676F73 25.2%, rgba(103, 111, 115, 0.2) 82.59%);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }
  }
</style>