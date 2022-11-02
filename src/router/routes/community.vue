<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-27 11:41:03
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 21:30:41
 * @FilePath: \novelai-tagdictionary-webui\src\router\routes\community.vue
 * @Description: 
-->
<script setup lang="ts">
import { NGrid, NGridMore } from "@/components/grid";
import { NSelect } from "@/components/select";
import { NButton } from "@/components/button";
import { NCheckbox } from "@/components/checkbox";
import { NInput } from "@/components/input";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { createFakeArticle } from "@/utils/article-tester";

import type { iSelectItems } from "@/components/select";
import type { iGridItem } from "@/components/grid";

const _18Plus = ref(true);
const _articleRoute = "community:article";

const route = useRoute();
const router = useRouter();

const originalArticle = route.name === _articleRoute;
const itemKey = ref("0");
const items: iSelectItems[] = [
  {
    type: "item",
    key: "0",
    value: "最受欢迎",
  },
  {
    type: "item",
    key: "1",
    value: "最受欢迎 / 1星期内",
  },
  {
    type: "item",
    key: "2",
    value: "最受欢迎 / 1个月内",
  },
  {
    type: "item",
    key: "3",
    value: "最受欢迎 / 1年内",
  },
  { type: "line" },
  {
    type: "item",
    key: "4",
    value: "最新发布",
  },
];

const item2Key = ref("0");
const items2: iSelectItems[] = [
  {
    type: "item",
    key: "0",
    value: "所有模型",
  },
  {
    type: "item",
    key: "1",
    value: "StableDiffusion - NovelAI",
  },
  {
    type: "item",
    key: "2",
    value: "Naifu - NovelAI",
  },
];

let loadingCounts = 0;

const gridItems = ref<iGridItem[]>([]);
const gridLoading = ref(false);
const gridOver = ref(false);

function routeBack() {
  router.back();
}

function routeToArticle(id: string) {
  router.push({ name: "community:article", query: { id } });
}

function loadMoreShot() {
  gridItems.value.push(...createFakeArticle(22));
}

function loadMoreShotLazy() {
  if (gridLoading.value || gridOver.value) return;

  gridLoading.value = true;
  setTimeout(() => {
    if (loadingCounts < 3) {
      loadingCounts++;
      loadMoreShot();
      gridLoading.value = false;
    } else {
      gridOver.value = true;
    }
  }, 1000 + Math.random() * 2000);
}

onMounted(() => {
  loadMoreShot();
});

window.onscroll = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const windowHeight =
    document.documentElement.clientHeight || document.body.clientHeight;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  console.log(scrollTop + windowHeight, scrollHeight);

  if (scrollTop + windowHeight >= scrollHeight) {
    loadMoreShotLazy();
  }
};

router.beforeEach((to, from, next) => {
  return to.name === "community" && originalArticle
    ? location.reload()
    : next();
});
</script>

<template>
  <teleport to="body">
    <div
      id="app-article-modal"
      v-if="route.name === _articleRoute && !originalArticle"
    >
      <div class="__modal-bar" @click="routeBack"></div>
      <div class="__modal-container">
        <router-view />
      </div>
    </div>
  </teleport>
  <div class="page-container" v-if="originalArticle">
    <router-view />
  </div>
  <div class="page-container" v-else>
    <div class="page-container__action">
      <!-- <button @click="routeToArticle">push</button> -->
      <div class="page-container__action__selects">
        <n-select
          class="page-container__action__selects__item"
          v-model:current-key="itemKey"
          :items="items"
        />
        <n-select
          class="page-container__action__selects__item"
          v-model:current-key="item2Key"
          :items="items2"
        />
        <n-checkbox
          class="page-container__action__selects__checkbox"
          title="18+"
          v-model:checked="_18Plus"
        />
      </div>
      <n-button class="page-container__action__option" title="条件过滤" arrow />
      <n-input
        simple-on-mobile
        class="page-container__action__search"
        icon-name="search"
        placeholder="善用搜索哦~"
        type="text"
      />
    </div>
    <div class="page-container__content">
      <n-grid :items="gridItems" @on-view="routeToArticle" />
      <n-grid-more
        :over="gridOver"
        :loading="gridLoading"
        @click-more="loadMoreShotLazy"
      />
    </div>
  </div>
</template>

<style lang="scss">
.page-container {
  & &__action {
    display: flex;
    flex-direction: row;

    &__selects {
      display: flex;
      flex-direction: row;

      &__item {
        margin-right: 12px;
      }

      &__checkbox {
        margin: 0 2px;
      }
    }

    &__search {
      margin-left: auto;
    }
  }
}

#app-article-modal {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10000;
  animation: app-article-modal-visible 290ms forwards;

  .__modal-bar {
    cursor: pointer;
  }

  .__modal-container {
    flex: 1;
    background-color: white;
    overflow: hidden;
    transform-origin: 5 0% 100%;
  }

  @keyframes app-article-modal-visible {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

@media only screen and (min-width: 920px) {
  #app-article-modal {
    .__modal-bar {
      height: 42px;
    }

    .__modal-container {
      border-radius: 20px 20px 0 0;
      animation: app-article-modal-fadein-desktop 600ms forwards
        cubic-bezier(0.11, 0.71, 0, 1);
    }

    @keyframes app-article-modal-fadein-desktop {
      0% {
        border-radius: 40px 40px 0 0;
        transform: scale(0.97) translateY(240px);
      }

      100% {
        border-radius: 20px 0px 0 0;
        transform: scale(1) translateY(0px);
      }
    }
  }

  .page-container {
    padding-top: 83px;
    & &__action {
      padding: 36px 72px 0;

      &__option {
        display: none;
      }

      &__search {
        width: 220px;
      }
    }

    & &__content {
      padding: 36px 72px 42px;
    }
  }
}

@media only screen and (max-width: 919px) {
  #app-article-modal {
    .__modal-bar {
      display: none;
    }

    .__modal-container {
      border-radius: none;
      animation: app-article-modal-fadein-mobile 600ms forwards
        cubic-bezier(0.11, 0.71, 0, 1);
    }

    @keyframes app-article-modal-fadein-mobile {
      0% {
        transform: scale(0.97) translateY(240px);
      }

      100% {
        transform: scale(1) translateY(0px);
      }
    }
  }

  .page-container {
    padding-top: 61px;
    & &__action {
      flex-direction: row-reverse;
      border-bottom: solid 1px var(--nav-border-color);
      padding: 16px 20px;

      &__selects {
        display: none;
      }

      &__search {
        flex: 1;

        input {
          background-color: transparent;
        }
      }
    }

    & &__content {
      padding: 20px;
    }
  }
}
</style>
