<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-05 16:57:20
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-05 19:08:21
 * @FilePath: \novelai-tagdictionary-webui\src\components\navigator\navigator.vue
 * @Description: 
-->
<script setup lang="ts">
import type { iNavigatorItem } from "./types";

const emits = defineEmits<{
  (e: "update:currentKey", key: string): void;
}>();
const props = defineProps({
  currentKey: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => Array<iNavigatorItem>,
    default: [],
  },
});
</script>

<template>
  <ul class="n-navigator">
    <li
      v-for="item in props.items"
      class="n-navigator__item"
      :class="{
        __active: props.currentKey === item.key,
      }"
      @click="emits('update:currentKey', item.key)"
    >
      {{ item.value }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.n-navigator {
  display: flex;
  position: relative;
  list-style: none;

  flex-direction: row;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    background-color: #f0f0f0;
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  & &__item {
    flex: 1;
    display: flex;
    position: relative;
    cursor: pointer;

    color: var(--color-default);
    font-size: 14px;
    height: 48px;
    align-items: center;
    justify-content: center;
    z-index: 0;

    &::after {
      content: "";
      position: absolute;
      background-color: var(--color-primary);
      opacity: 0;
      transform: scaleX(0.7);
      height: 2px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;

      transition: transform 200ms, opacity 200ms;
    }

    &.__active {
      color: var(--color-primary);
      font-weight: 500;

      &::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
}
</style>
