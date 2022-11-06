<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-06 17:09:42
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-06 17:14:36
 * @FilePath: \novelai-tagdictionary-webui\src\components\information\information.vue
 * @Description: 
-->
<script setup lang="ts"></script>

<template>
  <div class="n-information">
    <p class="n-information__title">上传日期</p>
    <p class="n-information__value">2022/11/04</p>
    <span class="n-information__fold">展开</span>
  </div>
</template>

<style lang="scss" scoped>
.n-information {
  margin-bottom: 26px;

  &:last-child {
    margin-bottom: 0;
  }

  & &__title,
  & &__fold {
    font-weight: 600;
    font-size: 12px;
    color: #797980;
  }

  & &__value {
    font-weight: 500;
    font-size: 13px;
    line-height: 150%;
    color: #444444;
  }
}
</style>
