<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-05 16:57:20
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-05 17:21:00
 * @FilePath: \novelai-tagdictionary-webui\src\components\navigator\navigator.vue
 * @Description: 
-->
<script setup lang="ts">
const props = {}
</script>

<template>
  <ul class="n-navigator">
    <li class="n-navigator__item __active">呈现</li>
    <li class="n-navigator__item">预设</li>
    <li class="n-navigator__item">作品集</li>
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
      transform: scaleX(0);
      height: 2px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }

    &.__active {
      color: var(--color-primary);
      font-weight: 500;

      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
