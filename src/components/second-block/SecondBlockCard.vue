<template>
  <article class="second-block__card card">
    <slot name="icon"></slot>
    <h3><slot name="title"></slot></h3>
    <p><slot name="lore"></slot></p>
  </article>
</template>

<style scoped>
  .second-block__card{
    border: solid black;
    border-width: 1px 1px 1px 0;
    height: 100%;
  }
  .second-block__card h3{
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
  .second-block__card p{
    font-size: 22px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0px;
    text-align: left;
    color: #676F73;
  }
</style>