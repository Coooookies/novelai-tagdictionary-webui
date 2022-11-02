<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 00:33:54
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 08:49:31
 * @FilePath: \novelai-tagdictionary-webui\src\components\tab-bar\tab-bar.vue
 * @Description: 
-->
<script setup lang="ts">
import tabTitle from "./tab-bar-icon-title.vue";
import tabSubTitle from "./tab-bar-icon-subtitle.vue";
import tabMenu from "./tab-bar-menu.vue";
import tabMenuSwitch from "./tab-bar-menu-switch.vue";

import { NLanguageCaller } from "../language";
import { NGuideButton } from "../button";
import { ref, watch } from "vue";
import { vibration } from "@/utils/vibration";

const tabLabOpened = ref(false);

watch(tabLabOpened, () => {
  vibration(40);
});
</script>

<template>
  <header id="header">
    <div class="app-header">
      <div class="app-header__icon">
        <tab-title />
        <tab-sub-title
          :class="{
            __visible: tabLabOpened,
          }"
        />
      </div>
      <!-- <div class="app-header__hr app-header__hr__icon" /> -->
      <div class="app-header__menu" :class="{ _open: tabLabOpened }">
        <tab-menu class="app-header__menu__content" />
        <n-language-caller class="app-header__menu__language" />
      </div>
      <div class="app-header__action">
        <n-guide-button icon-name="upload" text="投稿" />
      </div>
      <tab-menu-switch
        class="app-header__switch"
        :is-enable="tabLabOpened"
        @on-switch="tabLabOpened = !tabLabOpened"
      />
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6000;
}

.app-header {
  position: relative;
  border-bottom: solid 1px var(--nav-border-color);
  background-color: var(--nav-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;

  & &__hr {
    height: 24px;
    width: 1px;
    margin: 0 18px;
    background-color: var(--nav-border-color);

    &__icon {
      margin-left: 38px;
    }
  }

  & &__icon {
    display: flex;
    flex-direction: row;

    svg {
      &:nth-child(1) {
        fill: var(--color-primary);
      }

      &:nth-child(2) {
        fill: var(--color-default);
      }
    }
  }

  & &__menu {
    display: flex;
    flex: 1;
  }

  & &__action {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
  }

  & &__switch {
    padding: 8px;
  }
}

@media only screen and (max-width: 919px) {
  .app-header {
    height: 60px;
    padding: 0 16px;
    justify-content: center;

    & &__icon {
      flex: 1;
      align-items: center;
      padding-left: 6px;

      svg {
        &:nth-child(2) {
          margin-left: 8px;
          visibility: hidden;
          opacity: 0;

          transition: visibility 200ms, opacity 200ms;

          &.__visible {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }

    & &__hr,
    & &__action {
      display: none;
    }

    & &__menu {
      position: fixed;
      top: 61px;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px;
      background-color: var(--nav-background-color);
      flex-direction: column;
      z-index: 5000;

      &__language {
        margin: auto 0 10px 10px;
        margin-top: auto;
      }

      & {
        opacity: 0;
        visibility: hidden;
        transition: opacity 260ms, visibility 260ms;

        .app-header__menu__content {
          transition: transform 260ms;
          transform: translateY(-6px);
        }
      }

      &._open {
        opacity: 1;
        visibility: visible;

        .app-header__menu__content {
          transform: translateY(0px);
        }
      }
    }

    & &__switch {
      margin-left: auto;
    }
  }
}

@media only screen and (min-width: 920px) {
  .app-header {
    height: 82px;
    padding: 0 38px;

    & &__icon {
      align-items: flex-start;

      svg {
        &:nth-child(2) {
          margin-left: 6px;
        }
      }
    }

    & &__menu {
      flex-direction: row;
      align-items: center;
      margin-left: 36px;

      &__language {
        margin-left: auto;
      }
    }

    & &__switch {
      display: none;
    }
  }
}
</style>
