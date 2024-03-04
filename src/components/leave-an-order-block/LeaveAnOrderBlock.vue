<script setup>
import Arrow from '@img/Arrow.vue';
</script>

<template>
  <div class="filler">
    <div class="leave-an-order-block">
      <h1 class="leave-an-order-block__text">оставьте заявку на поддержку сайта</h1>
      <div class="leave-an-order-block__arrow"><Arrow></Arrow></div>
    </div>
  </div>
</template>

<style scoped>
.filler{
  position: static;
  width: 100%;
  padding: 0;
  margin: 0;
  background: var(--purple);
}
.leave-an-order-block{
  display: grid;
  grid-template-columns: 75% 25%;
  align-items: center;
  padding: 0 136px;
}
@media(max-width:1023){
  .leave-an-order-block{
    display: grid;
    grid-template-columns: 75% 25%;
    align-items: center;
    padding: 30px 100px;
  }
  .leave-an-order-block__arrow{
    justify-self: end;
    align-self: flex-end;
  }
}
.leave-an-order-block__arrow{
  justify-self: end;
}
.leave-an-order-block__text{
  text-transform: uppercase;
  font-size: 64px;
  font-weight: 600;
  line-height: 67px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
}
</style>