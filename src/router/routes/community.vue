<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-27 11:41:03
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-30 02:13:09
 * @FilePath: \novelai-tagdictionary-webui\src\router\routes\community.vue
 * @Description: 
-->
<script setup lang="ts">
import { NGrid } from "@/components/grid";
import { NSelect } from "@/components/select";
import { NButton } from "@/components/button";
import { NCheckbox } from "@/components/checkbox";
import { NInput } from "@/components/input";
import { ref } from "vue";
import type { iSelectItems } from "@/components/select";

const _18Plus = ref(true);
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
    value: "StableDiffusion - NovelAI",
  },
  {
    type: "item",
    key: "1",
    value: "Naifu - NovelAI",
  },
];
</script>

<template>
  <div class="page-container">
    <div class="page-container__action">
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
        placeholder="搜索"
        type="text"
      />
    </div>
    <div class="page-container__content">
      <n-grid />
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

@media only screen and (min-width: 920px) {
  .page-container {
    & &__action {
      margin-top: 83px;
      padding: 36px 72px 0;

      &__option {
        display: none;
      }

      &__search {
        width: 220px;
      }
    }

    & &__content {
      padding: 36px 72px;
    }
  }
}

@media only screen and (max-width: 919px) {
  .page-container {
    & &__action {
      flex-direction: row-reverse;
      border-bottom: solid 1px var(--nav-border-color);
      margin-top: 61px;
      padding: 16px 20px;

      &__selects {
        display: none;
      }

      &__search {
        flex: 1;
        margin-right: 12px;

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
