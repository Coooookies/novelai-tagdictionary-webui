<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-29 16:03:45
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 08:35:04
 * @FilePath: \novelai-tagdictionary-webui\src\components\button\button.vue
 * @Description: 
-->
<script setup lang="ts">
import selectMarker from "../select/select-marker.vue";

const props = defineProps({
  title: String,
  arrow: Boolean,
});
</script>

<template>
  <button class="n-button">
    <span class="n-button__text">{{ props.title }}</span>
    <select-marker class="n-button__marker" v-if="props.arrow" />
  </button>
</template>

<style lang="scss" scoped>
.n-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border-radius: 8px;
  padding: 11px 16px;

  cursor: pointer;
  transition: box-shadow 200ms, opacity 200ms;

  &:active {
    transition: none;
  }

  & &__text {
    white-space: nowrap;
    font-size: 14px;
    color: var(--color-default);
  }

  & &__marker {
    width: 10px;
    height: 7.5px;
    transform: rotate(-90deg);
    margin-left: 12px;
    fill: var(--color-default);
  }
}

@media only screen and (max-width: 919px) {
  .n-button {
    &:active {
      opacity: 0.5;
    }
  }
}

@media only screen and (min-width: 920px) {
  .n-button {
    &:hover {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.5);
    }

    &:active {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
