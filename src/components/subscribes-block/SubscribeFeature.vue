<script setup>
import FeatureEnabledIcon from "@img/FeatureEnabledIcon.svg";
import FeatureDisabledIcon from "@img/FeatureDisabledIcon.svg";
import ExtraIcon from "@img/ExtraIcon.svg";
</script>

<template>
  <div class="subscribe-feature">
    <div class="subscribe-feature__icon-wrapper">
      <img
        class="subscribe-feature__icon"
        :src="extra? ExtraIcon : disabled ? FeatureDisabledIcon : FeatureEnabledIcon"
      />
    </div>
    <p class="subscribe-feature__text" v-bind:class="{ gray: disabled }">
      {{ text }}
    </p>
  </div>
</template>

<style scoped>
.subscribe-feature {
  align-items: center;
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 30px;
}
.subscribe-feature__icon-wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
  align-items: start;
}
.subscribe-feature__icon {
  width: 24px;
  height: 24px;
}
.subscribe-feature__text {
  font-size: 18px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 1px;
  text-align: left;
  margin: 0;
}
.gray {
  color: #a8adaf;
}
@media (max-width: 1199px) {
  .subscribe-feature__icon {
    width: 18px;
    height: 18px;
  }
  .subscribe-feature__text {
    font-size: 14px;
    line-height: 15px;
  }
}
</style>
<script>
export default {
  props: {
    text: String,
    disabled: Boolean,
    extra: Boolean
  },
};
</script>
