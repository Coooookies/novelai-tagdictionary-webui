<script setup lang="ts">
import { NIconBg } from "./components/icon";
import { NTabBar } from "./components/tab-bar";
import { NFooter } from "./components/footer";
import { NScrollContainer } from "./components/scroll-container";
import { RouterView } from "vue-router";
</script>

<template>
  <n-icon-bg />
  <n-tab-bar />
  <n-scroll-container id="page-content">
    <router-view />
    <n-footer />
  </n-scroll-container>
</template>

<style lang="scss" scoped>
#page-content {
  height: 100vh;
}
</style>
