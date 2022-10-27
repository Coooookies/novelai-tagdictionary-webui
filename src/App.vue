<script setup lang="ts">
import { NIconBg } from "./components/icon";
import { NTabBar } from "./components/tab-bar";
import { RouterView } from "vue-router";
</script>

<template>
  <n-icon-bg />
  <n-tab-bar />
  <router-view />
</template>

<style lang="scss" scoped></style>
