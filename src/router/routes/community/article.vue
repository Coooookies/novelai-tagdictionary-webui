<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-01 20:22:52
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 09:16:46
 * @FilePath: \novelai-tagdictionary-webui\src\router\routes\community\article.vue
 * @Description: 
-->
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <p>{{ route.query }}</p>
</template>

<style lang="scss" scoped></style>
