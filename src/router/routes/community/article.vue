<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-01 20:22:52
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-09 23:30:16
 * @FilePath: \novelai-tagdictionary-webui\src\router\routes\community\article.vue
 * @Description: 
-->
<script setup lang="ts">
import type { iNavigatorItem } from "@/components/navigator";

import { useRoute } from "vue-router";
import { NGrid } from "@/components/grid";
import { NButton } from "@/components/button";
import { NNavigator } from "@/components/navigator";
import { NInformation } from "@/components/information";
import { ref } from "vue";

import { createFakeArticle } from "@/utils/article-tester";

const recommendArticles = createFakeArticle(8);
const navItems: iNavigatorItem[] = [
  {
    key: "view",
    value: "呈现",
  },
  {
    key: "template",
    value: "预设",
  },
  {
    key: "works",
    value: "作品集",
  },
];

const navCurrentKey = ref(navItems[0].key);
const route = useRoute();
</script>

<template>
  <div class="app-article">
    <div class="app-article__viewer"></div>
    <div class="app-article__bar">
      <div class="app-article__bar__info">
        <div class="__info-description">
          <span class="__title">白毛、猫娘、翅膀与海边</span>
          <span class="__author">@BCookies</span>
        </div>
        <div class="__info-action">
          <n-button icon-name="like" title="喜欢" mini />
        </div>
      </div>
      <n-navigator :items="navItems" v-model:current-key="navCurrentKey" />
      <div
        class="app-article__bar__container"
        v-if="navCurrentKey === navItems[0].key"
      >
        <n-information
          title="简介"
          value="There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real! Dream what you want to dream;go where you want to go;be what you want to be,because you have only one life and one chance to do all the things you want to do."
          foldable
        />
        <n-information title="授权方式" value="个人使用" />
        <n-information title="上传日期" value="2022/11/04" />
      </div>
      <div
        class="app-article__bar__container"
        v-if="navCurrentKey === navItems[1].key"
      ></div>
      <div
        class="app-article__bar__container"
        v-if="navCurrentKey === navItems[2].key"
      >
        <n-grid :items="recommendArticles" column />
      </div>
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
    overflow-y: auto;

    &__info {
      display: flex;
      flex-direction: row;
      align-items: center;

      .__info-description {
        display: flex;
        flex-direction: column;
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

        .__title,
        .__author {
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
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

      &__container {
        padding: 24px;
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

      &__container {
        padding: 20px;
      }
    }
  }
}
</style>
