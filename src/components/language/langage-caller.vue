<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 14:42:19
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 23:06:02
 * @FilePath: \novelai-tagdictionary-webui\src\components\language\langage-caller.vue
 * @Description: 
-->
<script setup lang="ts">
import { NIcon } from "../icon";
import { NSelectMarker } from "../select";
</script>

<template>
  <div class="n-language-caller">
    <n-icon class="n-language-caller__icon" icon-name="world" />
    <span class="n-language-caller__text">简体中文</span>
    <n-select-marker class="n-language-caller__marker" />
  </div>
</template>

<style lang="scss" scoped>
.n-language-caller {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  & &__icon {
    width: 18px;
    height: 18px;
  }

  & &__text {
    font-size: 14px;
    margin-left: 6px;
    color: var(--language-select-caller-color);
  }

  & &__marker {
    margin-left: 8px;
  }

  & &__icon,
  & &__marker {
    fill: var(--language-select-caller-color);
  }

  &:hover {
    --language-select-caller-color: var(--language-select-caller-hover-color);
  }
}

@media only screen and (max-width: 919px) {
  .n-language-caller {
    & &__marker {
      transform: rotate(-90deg);
    }
  }
}

@media only screen and (min-width: 920px) {
}
</style>
