<template>
  <article class="second-block__card card">
    <div class="second-block-card__icon"><slot name="icon"></slot></div>
    <h3>{{ title }}</h3>
    <p>{{ lore }}</p>
  </article>
</template>

<style scoped>
  .second-block__card{
    /*border: solid black;*/
    /*border-width: 1px;*/
    border: 1px solid;
    border-width: 1px 1px 1px 0;
    border-image: url('@img/BorderModel.svg');
    border-image-slice: 1;
    height: 355px;
  }
  .second-block__card h3{
    overflow-wrap: break-word;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
  .second-block__card p{
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
    color: #676F73;
    margin: 10px 0 0 0;
  }

  .second-block-card__icon{
    margin: 15px 0;
    width: 68px;
    height: 68px;
  }

  @media(min-width: 1200px){
    .second-block__card{
      height: 100%;
    }
    .second-block__card h3{
      font-size: 24px;
      line-height: 29px;
    }
    .second-block__card p{
      font-size: 22px;
      line-height: 27px;
      margin: 20px 0 30px 0;
    }
    .second-block-card__icon{
      margin: 20px 0;
      width: 94px;
      height: 94px;
    }
  }
</style>

<script>
export default {
  props: {
    title: String,
    lore: String
  }
}
</script>