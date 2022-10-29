<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  transitionDurationEnter: {
    type: Number,
    default: 300,
  },
  transitionDurationLeave: {
    type: Number,
    default: 300,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits<{
  (e: "onWrapperClick"): void;
}>();
</script>

<template>
  <teleport to="body">
    <transition
      name="m-wrapper-transition"
      :duration="{
        enter: props.transitionDurationEnter,
        leave: props.transitionDurationLeave,
      }"
    >
      <div
        v-show="props.visible"
        class="m-wrapper"
        :style="[
          `--enter-duration: ${props.transitionDurationEnter}ms`,
          `--leave-duration: ${props.transitionDurationEnter}ms`,
        ]"
        @click.self="emits('onWrapperClick')"
      >
        <slot />
        <!--wrapper的内容-->
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.m-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8000;
}

.m-wrapper-transition-enter-active {
  transition: opacity var(--enter-duration);
}

.m-wrapper-transition-leave-active {
  transition: opacity var(--leave-duration);
}

.m-wrapper-transition-leave-from,
.m-wrapper-transition-enter-to {
  opacity: 1;
}

.m-wrapper-transition-enter-from,
.m-wrapper-transition-leave-to {
  opacity: 0;
}
</style>
