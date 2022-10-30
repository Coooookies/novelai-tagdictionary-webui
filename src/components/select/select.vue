<script setup lang="ts">
import { ref, watch } from "vue";
import { NIcon } from "../icon";
import { NWrapper } from "../wrapper";
import type { iSelectItem, iSelectItems } from "./types";

import selectMarker from "./select-marker.vue";

const emits = defineEmits<{
  (e: "update:currentKey", key: string): void;
}>();
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  currentKey: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => Array<iSelectItems>,
    required: true,
  },
});

const NSelect = ref<HTMLDivElement | null>(null);
const NSelectContent = ref<HTMLDivElement | null>(null);
const NSelectCurrentValue = ref("");

const wrapperVisible = ref(false);
const wrapperBoxTop = ref(0);
const wrapperBoxLeft = ref(0);

const onWrapperClick = () => {
  wrapperVisible.value = false;
};

const onSelectHandle = (ev: Event) => {
  const selectBox = NSelect.value!.getBoundingClientRect();
  wrapperBoxTop.value = selectBox.top;
  wrapperBoxLeft.value = selectBox.left;
  wrapperVisible.value = true;
};

const onSelectItemClick = (key: string) => {
  emits("update:currentKey", key);
  onItemChange(key);
  wrapperVisible.value = false;
};

const onItemChange = (key: string) => {
  const item = props.items.find(
    (item) => item.type === "item" && item.key == key
  ) as iSelectItem | undefined;

  NSelectCurrentValue.value = item ? item.value : "";
};

watch(() => props.currentKey, onItemChange);
onItemChange(props.currentKey);
</script>

<template>
  <div
    class="n-select"
    :class="{ __check: wrapperVisible }"
    ref="NSelect"
    @click="onSelectHandle"
  >
    <span class="n-select__text" v-if="NSelectCurrentValue.length > 0">{{
      NSelectCurrentValue
    }}</span>
    <span class="n-select__text" v-else>{{ props.placeholder }}</span>
    <select-marker class="n-select__marker" />

    <n-wrapper
      :visible="wrapperVisible"
      :transition-duration-enter="180"
      :transition-duration-leave="300"
      @onWrapperClick="onWrapperClick"
    >
      <transition name="n-select-box-transition">
        <ul
          class="n-select-box"
          ref="NSelectContent"
          :style="{
            top: `${wrapperBoxTop}px`,
            left: `${wrapperBoxLeft}px`,
          }"
          v-if="wrapperVisible"
        >
          <template v-for="item in props.items" :key="item.key">
            <li
              class="n-select-box__item"
              v-if="item.type === 'item'"
              @click="onSelectItemClick(item.key)"
            >
              <n-icon
                class="__checked"
                icon-name="checked"
                v-if="props.currentKey === item.key"
              />
              <span class="__text">{{ item.value }}</span>
            </li>
            <li class="n-select-box__line" v-else-if="item.type === 'line'" />
          </template>
        </ul>
      </transition>
    </n-wrapper>
  </div>
</template>

<style lang="scss" scoped>
.n-select-box-transition-enter-active {
  transition: transform 180ms;
}

.n-select-box-transition-leave-active {
  transition: transform 300ms;
  pointer-events: none;
}

.n-select-box-transition-enter-active,
.n-select-box-transition-leave-active {
  transform-origin: 0% 0%;
}

.n-select-box-transition-leave-from,
.n-select-box-transition-enter-to {
  transform: scale(1);
}

.n-select-box-transition-enter-from,
.n-select-box-transition-leave-to {
  transform: scale(0.9);
}

.n-select,
.n-select-box {
  user-select: none;
}

.n-select {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 11px 16px;
  cursor: pointer;

  display: flex;
  align-items: center;

  transition: box-shadow 200ms;

  & &__text {
    font-size: 14px;
    color: var(--color-default);
  }

  & &__marker {
    margin-left: 12px;
    width: 10px;
    height: 7.5px;
    fill: var(--color-default);
  }

  &:hover {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
      0 0 0 4px rgba(0, 0, 0, 0.08);
  }

  &:active,
  &.__check {
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  }
}

.n-select-box {
  position: absolute;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 70px 0 rgba(0, 0, 0, 0.15);
  // box-shadow: 0 8px 22px -8px rgba(0, 0, 0, 0.1),
  //   inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 6px;

  list-style: none;
  max-height: calc(100vh - 20px);

  & &__line {
    margin: 6px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.05);
  }

  & &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 11px 12px;

    border-radius: 6px;
    cursor: pointer;

    transition: background-color 100ms;
    .__checked {
      margin-right: 12px;
      width: 16px;
      height: 16px;
      fill: var(--color-default);
    }

    .__text {
      margin-left: 28px;
      font-size: 14px;
      color: var(--color-default);
    }

    .__checked + .__text {
      margin-left: 0;
      font-weight: 600;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
}
</style>
