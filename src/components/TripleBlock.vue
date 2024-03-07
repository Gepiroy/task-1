<template>
  <div class="global-container">
    <section class="triple-block">
      <div v-if="title||comment" class="triple-block-heading">
        <div v-if="title" class="justify-left">
          <h1 class="triple-block__title">{{ title }}</h1>
        </div>
        <div v-if="comment" class="justify-right">
          <p class="triple-block__comment">{{ comment }}</p>
        </div>
      </div>
      <div :class="'triple-body ' + body_style">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<style scoped>
.triple-block{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.triple-body{
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
.triple-block-heading{
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.triple-block__title{
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #263238;
}
.triple-block__comment{
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #676F73;
}
.no-mobile-gap{
  gap: 0;
}
@media(min-width: 1200px){
  .triple-block{
    gap: 50px;
  }
  .no-mobile-gap{
    gap: auto;
  }
  .triple-body{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row dense;
    gap: 25px;
  }
  .triple-block-heading{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .triple-block__title{
    font-size: 40px;
    line-height: 43px;
    letter-spacing: 1px;
  }
  .triple-block__comment{
    font-size: 28px;
    line-height: 34px;
  }
}
</style>

<script>
  export default {
    props: {
      title: String,
      comment: {
        type: String,
        default: null
      },
      body_style: String
    }
  }
</script>