<template>
  <div class = "subscribe-feature">
    <object class="subscribe-feature__icon"><slot name="icon"></slot></object>
    <p class="subscribe-feature__text"><slot name="text"></slot></p>
  </div>
</template>

<style>
  .subscribe-feature{
    align-items: center;
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 30px;
  }
  .subscribe-feature__text{
    font-size: 18px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 1px;
    text-align: left;
    margin:0;
  }
</style>