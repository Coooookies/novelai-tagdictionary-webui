<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-29 16:03:45
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-05 16:43:17
 * @FilePath: \novelai-tagdictionary-webui\src\components\button\button.vue
 * @Description: 
-->
<script setup lang="ts">
import selectMarker from "../select/select-marker.vue";
import { NIcon } from "../icon";

const emits = defineEmits<{
  (e: "click", ev: MouseEvent): void;
}>();
const props = defineProps({
  title: String,
  mini: Boolean,
  ghost: Boolean,
  arrow: Boolean,
  iconName: String,
});
</script>

<template>
  <button
    class="n-button"
    @click="emits('click', $event)"
    :class="{
      'n-button__mini': props.mini,
      'n-button__primary': !props.ghost,
      'n-button__ghost': props.ghost,
    }"
  >
    <n-icon class="__icon" :icon-name="props.iconName" v-if="props.iconName" />
    <span class="__text">{{ props.title }}</span>
    <select-marker class="__marker" v-if="props.arrow" />
  </button>
</template>

<style lang="scss" scoped>
.n-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  padding: 11px 16px;

  cursor: pointer;
  transition: box-shadow 200ms, opacity 200ms, background-color 150ms;

  .__icon {
    margin-left: -2px;
    width: 18px;
    height: 18px;
  }

  .__text {
    white-space: nowrap;
    font-size: 14px;
  }

  .__marker {
    width: 10px;
    height: 7.5px;
    transform: rotate(-90deg);
    margin-left: 12px;
  }

  .__icon + .__text {
    margin-left: 5px;
  }

  &.n-button__mini {
    padding: 8px 16px;

    .__icon {
      width: 16px;
      height: 16px;
    }
  }

  &.n-button__ghost {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);

    .__icon,
    .__marker {
      fill: var(--color-default);
    }

    .__text {
      color: var(--color-default);
    }
  }

  &.n-button__primary {
    background-color: var(--button-primary-background-color);

    .__icon,
    .__marker {
      fill: white;
    }

    .__text {
      color: white;
      font-weight: bold;
    }
  }
}

@media only screen and (max-width: 919px) {
  .n-button {
    &.n-button__ghost {
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);

      &:active {
        opacity: 0.5;
      }

      &:active {
        transition: none;
      }
    }

    &.n-button__primary {
      &:active {
        background-color: var(--button-primary-active-background-color);
        transition: background-color 50ms;
      }
    }
  }
}

@media only screen and (min-width: 920px) {
  .n-button {
    &.n-button__ghost {
      &:hover {
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
          0 0 0 4px rgba(0, 0, 0, 0.08);
      }

      &:active {
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
      }
    }

    &.n-button__primary {
      &:hover {
        background-color: var(--button-primary-hover-background-color);
      }

      &:active {
        background-color: var(--button-primary-active-background-color);
        transition: background-color 50ms;
      }
    }
  }
}
</style>
