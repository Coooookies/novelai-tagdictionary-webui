<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const scrollbar = ref<HTMLDivElement | null>(null);
const scrollbarRef = computed(() => scrollbar.value!);
const scrollbarVisible = ref(false);
const scrollbarHeightRate = ref(0);
const scrollbarPositionRate = ref(0);
const scrollbarContainer = ref<HTMLDivElement | null>(null);
const scrollbarContainerRef = computed(() => scrollbarContainer.value!);
const scrollbarMousePosition = ref<number[]>([]);
const scrollbarMouseOffset = ref(0);

const pageScrollHandler = (target: EventTarget | HTMLDivElement) => {
  if (scrollbarMousePosition.value.length === 0) {
    const element = target as HTMLDivElement;
    const elementHeight = element.clientHeight;
    const scrollHeight = element.scrollHeight;

    scrollbarHeightRate.value = elementHeight / scrollHeight;
    scrollbarVisible.value = scrollbarHeightRate.value < 1;
    scrollbarPositionRate.value =
      element.scrollTop / (scrollHeight - elementHeight);
  }
};

const pageUpdateHandler = () => {
  pageScrollHandler(scrollbarContainerRef.value);
};

const pageBarMousedownHandler = (event: MouseEvent) => {
  const scrollbarContainerHeight = scrollbarRef.value.clientHeight;
  const scrollbarTop =
    (scrollbarContainerHeight -
      scrollbarContainerHeight * scrollbarHeightRate.value) *
    scrollbarPositionRate.value;

  scrollbarMousePosition.value = [event.clientX, event.clientY];
  scrollbarMouseOffset.value =
    event.clientY -
    scrollbarTop -
    scrollbarRef.value.getBoundingClientRect().top;
};

const pageBarMousemoveHandler = (event: MouseEvent) => {
  if (scrollbarMousePosition.value.length === 2) {
    const scrollbarContainerHeight = scrollbarRef.value.clientHeight;
    const scrollbarHeight =
      scrollbarContainerHeight * scrollbarHeightRate.value;
    const scrollTop =
      (event.clientY -
        scrollbarMouseOffset.value -
        scrollbarRef.value.getBoundingClientRect().top) /
      (scrollbarContainerHeight - scrollbarHeight);

    scrollbarPositionRate.value =
      scrollTop < 0 ? 0 : scrollTop > 1 ? 1 : scrollTop;

    scrollbarContainerRef.value.scrollTo({
      top:
        scrollbarPositionRate.value *
        (scrollbarContainerRef.value.scrollHeight -
          scrollbarContainerRef.value.clientHeight),
    });
  }
};

const pageBarMouseupHandler = (event: MouseEvent) => {
  pageBarMousemoveHandler(event);
  scrollbarMousePosition.value = [];
};

const pageContainerObserver = new MutationObserver(pageUpdateHandler);

onMounted(() => {
  pageScrollHandler(scrollbarContainerRef.value);
  pageContainerObserver.observe(scrollbarContainerRef.value, {
    attributes: false,
    childList: true,
    subtree: true,
  });

  document.addEventListener("mousemove", pageBarMousemoveHandler);
  document.addEventListener("mouseup", pageBarMouseupHandler);
});

onUnmounted(() => {
  pageContainerObserver.disconnect();
  document.removeEventListener("mousemove", pageBarMousemoveHandler);
  document.removeEventListener("mouseup", pageBarMouseupHandler);
});
</script>

<template>
  <div class="n-scroll-container">
    <div
      class="__content"
      ref="scrollbarContainer"
      @scroll="pageScrollHandler($event.target!)"
    >
      <slot />
    </div>
    <div
      v-if="scrollbarVisible"
      ref="scrollbar"
      class="__scroll-bar"
      @mousedown="pageBarMousedownHandler"
    >
      <div class="__bar-controll" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-scroll-container {
  position: relative;

  .__content {
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .__scroll-bar {
    margin: 4px 4px 4px 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 4px;
    box-sizing: border-box;
    z-index: 1;

    .__bar-controll {
      position: absolute;
      top: calc(
        (
            (100 - v-bind(scrollbarHeightRate) * 100) *
              v-bind(scrollbarPositionRate)
          ) * 1%
      );
      width: 100%;
      height: calc(v-bind(scrollbarHeightRate) * 100%);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      transition: background-color 200ms;
    }
  }

  &:hover {
    .__scroll-bar .__bar-controll {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(3px);

      &:hover {
        background-color: rgba(0, 0, 0, 0.45);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
</style>
