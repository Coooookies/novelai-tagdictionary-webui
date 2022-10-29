<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-29 01:07:44
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-29 13:45:48
 * @FilePath: \novelai-tagdictionary-webui\src\components\grid\grid.vue
 * @Description: 
-->
<script setup lang="ts">
import gridItemVue from "./grid-item.vue";
</script>

<template>
  <ul class="n-grid-content">
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
    <gridItemVue />
  </ul>
</template>

<style lang="scss" scoped>
.n-grid-content {
  position: relative;
  display: grid;
  grid-gap: 36px;
  list-style: none;
}

@media only screen and (min-width: 1600px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  }
}

@media only screen and (max-width: 1599px) and (min-width: 920px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
}

@media only screen and (max-width: 919px) {
  .n-grid-content {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
}
</style>
