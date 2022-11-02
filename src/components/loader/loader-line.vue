<!--
 * @Author: Coooookies admin@mitay.net
 * @Date: 2022-11-02 19:12:05
 * @LastEditors: Coooookies admin@mitay.net
 * @LastEditTime: 2022-11-02 19:15:19
 * @FilePath: \novelai-tagdictionary-webui\src\components\loader\loader-line.vue
 * @Description: 
-->
<template>
  <div class="n-loader__line" />
</template>

<style lang="scss" scoped>
.n-loader__line {
  height: 4px;
  background-color: var(--color-primary);
  animation: loader 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
}

@keyframes loader {
  0%,
  44%,
  88.1%,
  100% {
    transform-origin: left;
  }

  0%,
  100%,
  88% {
    transform: scaleX(0);
  }

  44.1%,
  88% {
    transform-origin: right;
  }

  33%,
  44% {
    transform: scaleX(1);
  }
}
</style>
3
