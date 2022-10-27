<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-10-17 22:40:28
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-10-17 22:44:23
 * @FilePath: \novel\src\icon\svg-icon.vue
 * @Description: 
-->
<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <svg><use :xlink:href="`#icon-${props.iconName}`"></use></svg>
</template>
