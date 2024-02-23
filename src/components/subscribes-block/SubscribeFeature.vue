<template>
  <div class = "subscribe-feature">
    <object class="subscribe-feature__icon"><slot name="icon"></slot></object>
    <p class="subscribe-feature__text"><slot name="text"></slot></p>
  </div>
</template>

<style>
  .subscribe-feature{
    /*display: flex;
    flex-direction: row;*/
    align-items: center;
    display: grid;
    grid-template-columns: 1.5rem 1fr;
    gap: 30px;
  }
  .subscribe-feature__text{
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.800000011920929px;
    text-align: left;
  }
</style>