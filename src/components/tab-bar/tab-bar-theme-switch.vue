<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 15:56:57
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 16:25:35
 * @FilePath: \novelai-tagdictionary-webui\src\components\tab-bar\tab-bar-theme-switch.vue
 * @Description: 
-->
<script setup lang="ts">
import { NIcon } from "../icon";
</script>

<template>
  <button class="tabbar-theme-switch">
    <n-icon class="tabbar-theme-switch__icon __day" icon-name="day" />
    <!-- <n-icon class="tabbar-theme-switch__icon __night" icon-name="day" /> -->
  </button>
</template>

<style lang="scss" scoped>
.tabbar-theme-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  background-color: transparent;

  & &__icon {
    width: 18px;
    height: 18px;

    &.__day {
      fill: #ffbe5d;
    }

    &.__night {
      fill: #5086ef;
    }
  }
}
</style>
