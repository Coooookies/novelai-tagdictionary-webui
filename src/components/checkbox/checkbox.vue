<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-09-23 14:57:39
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-29 17:00:01
 * @FilePath: \novelai-tagdictionary-webui\src\components\checkbox\checkbox.vue
 * @Description: 
-->
<script setup lang="ts">
const emits = defineEmits<{
  (e: "update:checked", value: boolean): void;
}>();
const props = defineProps({
  title: String,
  checked: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="m-checkbox" @click="emits('update:checked', !props.checked)">
    <span
      class="m-checkbox-block"
      :class="{
        checked: props.checked,
      }"
    />
    <span class="m-checkbox-text" :class="{ checked: props.checked }">{{
      props.title
    }}</span>
  </div>
</template>

<style lang="scss" scoped>
.m-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & &-block {
    display: block;
    width: 18px;
    height: 18px;
    position: relative;
    box-shadow: inset 0 0 0 1.5px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    border-radius: 4px;
    transition: box-shadow 300ms, background-color 300ms;

    &::before {
      left: 3.2px;
      top: 10.5px;
      width: 0px;
      transform-origin: 4px 1px;
      transform: rotate(45deg);
      transition: width 100ms;
      transition-delay: 150ms;
    }

    &::after {
      left: 7px;
      top: 10.5px;
      width: 0px;
      transform-origin: 1px 1px;
      transform: rotate(-45deg);
      transition: width 150ms;
    }

    &::before,
    &::after {
      content: "";
      z-index: 1;
      position: absolute;
      height: 1.5px;
      background-color: white;
    }

    &.checked {
      box-shadow: inset 0 0 0 9px var(--color-primary);
      background-color: var(--color-primary);

      &::before {
        width: 5px;
        transition-delay: 0ms;
      }

      &::after {
        width: 8px;
        transition-delay: 100ms;
      }
    }
  }

  & &-text {
    margin-left: 4px;
    font-size: 14px;
    color: var(--color-default);

    &.checked {
      font-weight: bold;
    }
  }
}
</style>
