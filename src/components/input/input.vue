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
});

const inputHandler = (event: Event) => {
  emits("update:value", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="n-input">
    <n-icon
      class="n-input__icon"
      :icon-name="props.iconName"
      v-if="props.iconName"
    />
    <input
      class="n-input__input"
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
    
}
</style>
