<script setup lang="ts"></script>

<template>
  <li class="n-grid-content__item">
    <div class="n-grid-content__item__banner"></div>
    <div class="n-grid-content__item__info"></div>
  </li>
</template>

<style lang="scss" scoped>
.n-grid-content__item {
  & &__banner {
    position: relative;
    height: 0;
    padding-bottom: 70%;
    overflow: hidden;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
