<script setup>
</script>

<template>
  <div class="triple-block-heading">
    <div class="first-grid-div justify-left">
      <h1><slot name="title"></slot></h1>
    </div>
    <div class="second-grid-div justify-right">
      <p><slot name="comment"></slot></p>
    </div>
  </div>
  <div class="triple-body">
    <slot name="grid-content"></slot>
  </div>
</template>

<style scoped>
.triple-block-heading{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>