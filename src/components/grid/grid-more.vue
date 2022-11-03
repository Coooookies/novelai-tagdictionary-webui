<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 18:43:52
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-03 20:51:04
 * @FilePath: \novelai-tagdictionary-webui\src\components\grid\grid-more.vue
 * @Description: 
-->
<script setup lang="ts">
import { NButton } from "../button";
import { NLoaderTriangle } from "../loader";

const emits = defineEmits<{
  (e: "click-more"): void;
}>();
const props = defineProps({
  loading: Boolean,
  over: Boolean,
});
</script>

<template>
  <div class="n-grid-content__more">
    <p class="__over" v-if="props.over">你已经到达了这个世界的尽头</p>
    <n-loader-triangle class="__loader" v-else-if="props.loading" />
    <n-button
      class="__more"
      title="加载更多"
      @click="emits('click-more')"
      v-else
    />
  </div>
</template>

<style lang="scss" scoped>
.n-grid-content__more {
  height: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .__loader {
    transform: scale(60%);
  }

  .__over {
    font-size: 12px;
    line-height: 16px;
    color: #a8a8a8;
  }
}
</style>
