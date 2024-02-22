<script setup>
import SubscribeFeature from './SubscribeFeature.vue'
import FeatureEnabledIcon from './icons/FeatureEnabledIcon.vue'
import FeatureDisabledIcon from './icons/FeatureDisabledIcon.vue'
</script>

<template>
  <div class="subscribe-card">
    <h1><slot name="title"></slot></h1>
    <p><slot name="lore"></slot></p>
    <subscribe-feature v-for="(text, index) in subscriptionTexts" :key="index">
      <template v-if="index<activeFeatures" #icon><feature-enabled-icon></feature-enabled-icon></template>
      <template v-else #icon><feature-disabled-icon></feature-disabled-icon></template>
      <template v-if="index<activeFeatures" #text>{{ text }}</template>
      <template v-else #text><span class="gray-span">{{text }}</span></template>
    </subscribe-feature>
    <h1><slot name="price"></slot> ₽</h1>
  </div>
</template>

<script>
export default{
  components: { FeatureDisabledIcon },
  data: function() {
    return{
      subscriptionTexts: [
        "feature",
        "asdfsfdaf",
        "rytrydghdsytru",
        "fgjmgyohgkt",
        "hdsgftuhjftdghbrd",
        "ugyhjngfhtr",
        "jngjmf",
        "gjgmfdghesadfdsa",
        "reyrdyhftuyrd"
      ]
    }
  },
  props: {
  activeFeatures: {
   type: Number
  }
}
}
</script>

<style scoped>
  .subscribe-card{
    border-radius: 4px;
    border: 1px solid black;
    padding: 50px;
  }
  .ability-number{
    color: var(--purple);
  }
  .gray-span{
    color: #666;
  }
</style>