<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-06 17:09:42
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-07 21:32:42
 * @FilePath: \novelai-tagdictionary-webui\src\components\information\information.vue
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";

const fold = ref(true);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  foldable: Boolean,
});
</script>

<template>
  <div class="n-information">
    <p class="n-information__title">{{ props.title }}</p>
    <p
      class="n-information__value"
      :class="{ __unfold: !props.foldable || !fold }"
    >
      {{ props.value }}
    </p>
    <span
      class="n-information__fold"
      @click="fold = !fold"
      v-if="props.foldable"
      >{{ fold ? "展开" : "收起" }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.n-information {
  margin-bottom: 26px;

  &:last-child {
    margin-bottom: 0;
  }

  &__title,
  &__fold {
    color: #9d9d9d;
  }

  &__fold {
    cursor: pointer;

    &:hover {
      color: #afafaf;
      text-decoration: underline;
    }
  }

  &__value {
    margin-top: 2px;
    line-height: 150%;
    color: var(--color-default);
  }

  &__title,
  &__value {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__title,
  &__value,
  &__fold {
    font-weight: 500;
    font-size: 13px;
  }

  &__value.__unfold {
    white-space: unset;
    word-wrap: break-word;
  }
}
</style>
