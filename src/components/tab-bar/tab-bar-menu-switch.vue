<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-28 23:33:05
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-29 00:24:36
 * @FilePath: \novelai-tagdictionary-webui\src\components\tab-bar\tab-bar-menu-switch.vue
 * @Description: 
-->
<script lang="ts" setup>
const emits = defineEmits<{
  (e: "onSwitch"): void;
}>();

const props = defineProps({
  isEnable: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    class="tabbar-switch"
    :class="{ enable: props.isEnable }"
    @click="emits('onSwitch')"
  >
    <div class="__line" />
    <div class="__line" />
    <div class="__line" />
  </div>
</template>

<style lang="scss" scoped>
.tabbar-switch {
  width: 16px;
  height: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  user-select: none;
  cursor: pointer;

  .__line {
    width: 100%;
    height: 3px;
    background-color: var(--nav-switch-background-color);
    transform-origin: 100% 50%;
    margin-bottom: 5px;
    transition: transform 300ms, width 300ms;
    transition-timing-function: cubic-bezier(.43,1.61,.72,1.03);

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      width: 70%;
    }
  }

  &.enable {
    .__line {

      &:first-child {
        transform: rotate(-45deg);
      }

      &:nth-child(2) {
        width: 0px;
        transition: width 100ms;
      }

      &:last-child {
        transform: rotate(45deg);
      }

      &:first-child,
      &:last-child {
        width: 123%;
      }
    }
  }
}
</style>
