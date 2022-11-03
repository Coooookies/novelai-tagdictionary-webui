<script setup lang="ts">
import tabTitle from "../tab-bar/tab-bar-icon-title.vue";
import tabSubTitle from "../tab-bar/tab-bar-icon-subtitle.vue";
</script>

<template>
  <header id="footer">
    <div class="app-marker">
      <tab-title class="app-marker__icon" />
    </div>
    <div class="app-footer">
      <div class="app-footer__description">
        <div class="__app-logo">
          <tab-title class="__app-logo__icon" />
          <tab-sub-title class="__app-logo__text" />
        </div>
        <p class="__app-description">
          Percept是用于查询由人工智能技术生成的Anime作品的工具，为创作者提供想法。
        </p>
      </div>
      <div class="app-footer__link">
        <ul class="app-footer__link__group">
          <li class="__link-group__item __title">关注我们的动态</li>
          <li class="__link-group__item"><a href="###">Youtube</a></li>
          <li class="__link-group__item"><a href="###">Twitter</a></li>
          <li class="__link-group__item"><a href="###">Tiktok</a></li>
          <li class="__link-group__item"><a href="###">Bilibili</a></li>
          <li class="__link-group__item"><a href="###">Discord</a></li>
        </ul>
        <ul class="app-footer__link__group">
          <li class="__link-group__item __title">与我们同行</li>
          <li class="__link-group__item"><a href="###">加入QQ群</a></li>
          <li class="__link-group__item"><a href="###">加入Telegram群组</a></li>
          <li class="__link-group__item"><a href="###">加入Discord频道</a></li>
        </ul>
        <ul class="app-footer__link__group">
          <li class="__link-group__item __title">了解更多</li>
          <li class="__link-group__item"><a href="###">关于Percept</a></li>
          <li class="__link-group__item">
            <a href="###">我们如何保护你的隐私</a>
          </li>
          <li class="__link-group__item"><a href="###">版权保护</a></li>
          <li class="__link-group__item"><a href="###">反馈</a></li>
        </ul>
        <ul class="app-footer__link__group">
          <li class="__link-group__item __title">网站信息</li>
          <li class="__link-group__item">
            © 2022 Percept. All rights reserved.
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#footer {
  position: relative;
  background-color: #f6f6f6;
  z-index: 0;
}

.app-marker {
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;

  & &__icon {
    fill: rgba(231, 231, 231, 1);
    animation: icon-rotate-forever 80s linear infinite;
  }

  @keyframes icon-rotate-forever {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
}

.app-footer {
  display: flex;
  flex-wrap: wrap;

  & &__description,
  & &__link {
    flex-shrink: 0;
  }

  & &__description {
    .__app-logo {
      &__icon {
        fill: var(--color-primary);
      }

      &__text {
        fill: var(--color-default);
      }
    }

    .__app-description {
      font-weight: 500;
      font-size: 13px;
      line-height: 160%;
      color: rgba(135, 135, 139, 1);
    }
  }

  & &__link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    flex: 1;
    padding-top: 7px;

    &__group {
      list-style: none;
      margin-right: 48px;
      margin-bottom: 32px;

      &:last-child {
        margin-right: 0;
      }

      .__link-group__item {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }

        &,
        a {
          color: rgba(89, 89, 89, 95);
          font-weight: 500;
          font-size: 13px;
          text-decoration: none;
        }

        a {
          position: relative;

          &::after {
            content: "";
            position: absolute;
            background-color: rgba(89, 89, 89, 95);
            height: 1px;
            bottom: 0;
            right: 0;
            left: 0;
            transform-origin: 100% 50%;
            transform: scaleX(0%);
            transition: transform 200ms;
          }

          &:hover::after {
            transform-origin: 0% 50%;
            transform: scaleX(100%);
          }
        }

        &.__title {
          font-weight: 600;
          font-size: 14px;
          color: var(--color-default);
        }
      }
    }
  }
}

@media only screen and (max-width: 919px) {
  #footer {
    padding: 50px 36px 100px;
  }

  .app-marker {
    & &__icon {
      width: 320px;
      height: 320px;
      margin-right: -64px;
      margin-bottom: -82px;
    }
  }

  .app-footer {
    flex-direction: column;

    & &__description {
      .__app-logo {
        &__icon {
          width: 28px;
          height: 28px;
        }

        &__text {
          margin-left: 10px;
          width: 84px;
          height: 28px;
        }
      }

      .__app-description {
        margin-top: 8px;
      }
    }

    & &__link {
      margin-left: 0;
      padding-top: 48px;
    }
  }
}

@media only screen and (min-width: 920px) {
  #footer {
    padding: 72px;
  }

  .app-marker {
    & &__icon {
      width: 390px;
      height: 390px;
      margin-right: -72px;
      margin-bottom: -104px;
    }
  }

  .app-footer {
    flex-direction: row;

    & &__description {
      max-width: 200px;

      .__app-logo {
        &__icon {
          width: 34px;
          height: 34px;
        }

        &__text {
          margin-left: 10px;
          width: 102px;
          height: 34px;
        }
      }

      .__app-description {
        margin-top: 16px;
      }
    }

    & &__link {
      margin-left: 104px;
      padding-top: 7px;
    }
  }
}
</style>
