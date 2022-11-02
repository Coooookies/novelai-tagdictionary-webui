<script setup lang="ts">
import { NIcon } from "../icon";

const emits = defineEmits<{
  (e: "update:value", value: string): void;
}>();

const props = defineProps({
  type: String,
  disabled: Boolean,
  placeholder: String,
  value: String,
  iconName: String,
  simpleOnMobile: Boolean,
});

const inputHandler = (event: Event) => {
  emits("update:value", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="n-input" :class="{ __simple: props.simpleOnMobile }">
    <n-icon class="__icon" :icon-name="props.iconName" v-if="props.iconName" />
    <input
      class="__input"
      :type="props.type"
      :value="props.value"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="inputHandler"
    />
  </div>
</template>

<style lang="scss" scoped>
.n-input {
  position: relative;
  display: inline-flex;

  .__icon {
    position: absolute;
    width: 18px;
    height: 18px;

    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    fill: #a9a9ac;
  }

  .__input {
    padding: 11px 16px;
    flex-grow: 1;
    font-size: 14px;
    color: var(--color-default);
    outline: none;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    width: 0;

    transition: background-color 150ms, box-shadow 150ms;

    &::placeholder {
      color: #a9a9ac;
    }

    &:focus {
      background-color: transparent;
      box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }

    &:active {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.08);
    }
  }

  .__icon + .__input {
    padding-left: 38px;
  }
}

@media only screen and (max-width: 919px) {
  .n-input.__simple {
    .__icon {
      width: 20px;
      height: 20px;

      left: 4px;
    }

    .__input {
      background-color: transparent;
      padding: 4px 16px;
      font-size: 15px;

      &:focus {
        box-shadow: none;
      }
    }

    .__icon + .__input {
      padding-left: 32px;
    }
  }
}
</style>
