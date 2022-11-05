<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-01 20:22:52
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-05 17:08:54
 * @FilePath: \novelai-tagdictionary-webui\src\router\routes\community\article.vue
 * @Description: 
-->
<script setup lang="ts">
import { useRoute } from "vue-router";
import { NButton } from "@/components/button";
import { NNavigator } from "@/components/navigator";

const route = useRoute();
</script>

<template>
  <div class="app-article">
    <div class="app-article__viewer"></div>
    <div class="app-article__bar">
      <div class="app-article__bar__info">
        <div class="__info-description">
          <p class="__title">白毛、猫娘、翅膀与海边</p>
          <p class="__author">@BCookies</p>
        </div>
        <div class="__info-action">
          <n-button icon-name="like" title="喜欢" mini />
        </div>
      </div>
      <n-navigator />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-article {
  display: flex;
  flex-direction: row;
  height: 100%;

  & &__viewer {
    flex: 1;
    background-color: #f8f8f8;
  }

  & &__bar {
    display: flex;
    flex-direction: column;
    background-color: white;

    &__info {
      display: flex;
      flex-direction: row;
      align-items: center;

      .__info-description {
        flex: 1;

        .__title {
          font-size: 16px;
          font-weight: bold;
          color: var(--color-default);
        }

        .__author {
          font-size: 12px;
          font-weight: 500;
          color: #8c8f92;
        }
      }
    }
  }
}

@media only screen and (min-width: 920px) {
  .app-article {
    min-height: calc(100vh - 83px);

    & &__bar {
      width: 380px;

      &__info {
        padding: 26px 24px;
      }
    }
  }
}

@media only screen and (max-width: 919px) {
  .app-article {
    min-height: calc(100vh - 61px);

    & &__viewer {
      display: none;
    }

    & &__bar {
      width: 100%;

      &__info {
        padding: 22px 20px;
      }
    }
  }
}
</style>
