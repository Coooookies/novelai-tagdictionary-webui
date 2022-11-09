<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-29 01:07:44
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-09 23:29:04
 * @FilePath: \novelai-tagdictionary-webui\src\components\grid\grid.vue
 * @Description: 
-->
<script setup lang="ts">
import type { iGridItem } from "./types";
import gridItem from "./grid-item.vue";

const emits = defineEmits<{
  (e: "onView", id: string): void;
  (e: "onLike", id: string): void;
  (e: "onLink", url: string): void;
}>();

const props = defineProps({
  column: Boolean,
  items: {
    type: Array as () => Array<iGridItem>,
    default: [],
  },
});
</script>

<template>
  <ul
    class="n-grid-content"
    :class="{
      __column: props.column,
      __block: !props.column,
    }"
  >
    <template v-for="item in props.items">
      <grid-item
        :title="item.title"
        :author="item.author"
        :image-src="item.image"
        :image-counts="item.imagecount"
        :like-counts="item.likes"
        :view-counts="item.views"
        :r18="item.r18"
        class="__item"
        @click-like="emits('onLike', item.id)"
        @click-article="emits('onView', item.id)"
        @click-author="emits('onLink', item.authorUrl)"
      />
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.n-grid-content.__block {
  position: relative;
  display: grid;
  grid-gap: 36px;
  list-style: none;
}

.n-grid-content.__column {
  display: flex;
  flex-direction: column;
  list-style: none;

  .__item {
    margin-bottom: 28px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (min-width: 1600px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  }
}

@media only screen and (max-width: 1599px) and (min-width: 920px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
}

@media only screen and (max-width: 919px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
}
</style>
