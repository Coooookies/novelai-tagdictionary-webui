<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 00:33:54
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-28 23:06:17
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
    cursor: pointer;

    transition: background-color 150ms;

    .item-icon {
      width: 18px;
      height: 18px;
      fill: var(--color-default);
    }

    .item-text {
      font-size: 14px;
      color: var(--color-default);
    }

    &:hover {
      background-color: var(--nav-background-color-hover);
    }

    &:active {
      background-color: var(--nav-background-color-active);
      transition: background-color 50ms;
    }

    &.__active {
      background-color: var(--color-default);
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

    & &__item {
      padding: 16px;
      border-radius: 10px;
      margin-bottom: 6px;

      .item-icon {
        margin-right: 8px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media only screen and (min-width: 920px) {
  .app-header__menu__target {
    flex-direction: row;

    & &__item {
      align-items: center;
      padding: 9px 22px 9px 20px;
      border-radius: 50px;
      margin-right: 8px;

      .item-text {
        font-size: 14px;
        color: var(--color-default);
      }

      .item-icon {
        margin-right: 6px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
