<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 00:33:54
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 00:50:53
 * @FilePath: \novelai-tagdictionary-webui\src\components\tab-bar\tab-bar-menu.vue
 * @Description: 
-->
<script setup lang="ts">
import { NIcon } from "../icon";
</script>

<template>
  <ul class="app-header__menu__target">
    <li class="app-header__menu__target__item __active">
      <n-icon class="item-icon" icon-name="template" />
      <span class="item-text">成品预设</span>
    </li>
    <li class="app-header__menu__target__item">
      <n-icon class="item-icon" icon-name="dictionary" />
      <span class="item-text">魔咒图鉴</span>
    </li>
    <li class="app-header__menu__target__item">
      <n-icon class="item-icon" icon-name="analysis" />
      <span class="item-text">魔咒解析</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.app-header__menu__target {
  display: flex;
  list-style: none;

  & &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px 22px 9px 20px;
    border-radius: 50px;
    margin-right: 8px;
    cursor: pointer;

    transition: background-color 150ms;

    .item-icon {
      width: 18px;
      height: 18px;
      margin-right: 6px;
      fill: var(--color-main);
    }

    .item-text {
      font-size: 14px;
      color: var(--color-main);
    }

    &:hover {
      background-color: var(--nav-background-color-hover);
    }

    &:active {
      background-color: var(--nav-background-color-active);
      transition: background-color 50ms;
    }

    &:last-child {
      margin-right: 0;
    }

    &.__active {
      background-color: var(--color-main);
      cursor: default;

      .item-icon {
        fill: white;
      }

      .item-text {
        color: white;
      }
    }
  }
}

@media only screen and (max-width: 919px) {
  .app-header__menu__target {
    flex-direction: column;
  }
}

@media only screen and (min-width: 920px) {
  .app-header__menu__target {
    flex-direction: row;
  }
}
</style>
