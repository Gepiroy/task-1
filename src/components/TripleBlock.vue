<script setup>
</script>

<template>
  <div class="triple-block">
    <div v-if="this.$slots.title||this.$slots.comment" class="triple-block-heading">
      <div class="justify-left">
        <h1 class="triple-block__title"><slot name="title"></slot></h1>
      </div>
      <div class="justify-right">
        <p class="triple-block__comment"><slot name="comment"></slot></p>
      </div>
    </div>
    <div class="triple-body">
      <slot name="grid-content"></slot> <!-- legacy temporary support -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.triple-block-heading{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.triple-block__title{
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0.800000011920929px;
  text-align: left;
  color: #263238;
}
.triple-block__comment{
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0px;
    text-align: left;
    color: #676F73;
}
</style>