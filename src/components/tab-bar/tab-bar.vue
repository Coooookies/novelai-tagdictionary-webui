<script setup lang="ts">
import tabTitle from "./tab-bar-icon-title.vue";
import tabSubTitle from "./tab-bar-icon-subtitle.vue";
import tabMenu from "./tab-bar-menu.vue";
</script>

<template>
  <header id="header">
    <div class="app-header">
      <div class="app-header__icon">
        <tab-title />
        <tab-sub-title />
      </div>

      <div class="app-header__menu">
        <tab-menu />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
#header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.app-header {
  border-bottom: solid 1px var(--nav-border-color);
  background-color: var(--nav-background-color);
  display: flex;
  flex-direction: row;
  align-items: center;

  & &__icon {
    display: flex;
    flex-direction: column;

    svg {
      fill: var(--color-main);

      &:nth-child(2) {
        margin-top: 3px;
      }
    }
  }

  & &__menu {
    flex: 1;
  }
}

@media only screen and (max-width: 919px) {
  .app-header {
    height: 60px;
    justify-content: center;

    & &__icon {
      align-items: center;
    }

    & &__menu {
      display: none;
    }
  }
}

@media only screen and (min-width: 920px) {
  .app-header {
    height: 86px;
    padding: 0 38px;

    & &__icon {
      align-items: flex-start;
    }
  }
}
</style>
