<template>
  <div class="filler">
    <div class="leave-an-order-block">
      <h1 class="leave-an-order-block__text">оставьте заявку на поддержку сайта</h1>
      <div class="leave-an-order-block__arrow"><img src="@/assets/img/Arrow.svg" style="width:100%; height:100%;"></div>
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
  padding: 53px 136px;
}
.leave-an-order-block__arrow{
  justify-self: end;
  width: 100px;
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
@media(max-width:1023px){
  .leave-an-order-block{
    padding: 100px 30px;
  }
  .leave-an-order-block__arrow{
    align-self: flex-end;
    width: 60px;
  }
  .leave-an-order-block__text{
    font-size: 40px;
    line-height: 48px;
  }
}
</style>