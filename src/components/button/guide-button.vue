<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 20:53:37
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 08:34:44
 * @FilePath: \novelai-tagdictionary-webui\src\components\button\guide-button.vue
 * @Description: 
-->
<script setup lang="ts">
import { NIcon } from "../icon";

const props = defineProps({
  iconName: String,
  text: String,
});
</script>

<template>
  <button class="n-button">
    <n-icon
      class="n-button__icon"
      :icon-name="props.iconName"
      v-if="props.iconName"
    />
    <span class="n-button__text">{{ props.text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.n-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 10px 24px;
  background-color: var(--button-primary-background-color);
  border-radius: 1000px;

  transition: background-color 150ms;
  cursor: pointer;

  & &__icon {
    margin: 0 6px 0 -4px;
    width: 18px;
    height: 18px;
    color: white;
    fill: var(--button-primary-font-color);
  }

  & &__text {
    white-space: nowrap;
    font-size: 14px;
    color: var(--button-primary-font-color);
  }

  &:hover {
    background-color: var(--button-primary-hover-background-color);
  }

  &:active {
    background-color: var(--button-primary-active-background-color);
    transition: background-color 50ms;
  }
}
</style>
