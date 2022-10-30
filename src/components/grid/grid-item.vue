<script setup lang="ts">
import { NIcon } from "../icon";
</script>

<template>
  <li class="n-grid-content__item">
    <div class="n-grid-content__item__banner">
      <div class="__image-container">
        <img src="/1.png" />
      </div>
      <div class="__image-marker">
        <div class="__image-marker__r18tag">18+</div>
        <div class="__image-marker__info">
          <n-icon class="__icon" icon-name="document" />
          <span>4</span>
        </div>
      </div>
    </div>
    <div class="n-grid-content__item__info">
      <div class="__info-title">
        <h3 class="__info-title_title">标题测试，长度测试</h3>
        <div class="__info-title_action">
          <div class="__info-title_action_item">
            <n-icon icon-name="like" />
            <span>2,301</span>
          </div>
          <div class="__info-title_action_item">
            <n-icon icon-name="view" />
            <span>2,301</span>
          </div>
        </div>
      </div>
      <div class="__info-subtitle">
        <h6 class="__info-subtitle_title">@ButterCookies</h6>
      </div>
    </div>
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
    background-color: rgba(0, 0, 0, 0.04);

    .__image-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .__image-marker {
      position: absolute;
      display: flex;
      flex-direction: row;
      align-items: center;
      left: 0;
      top: 0;
      right: 0;
      padding: 14px 14px 0;

      &__r18tag {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.35);
        color: white;
        font-size: 12px;
        padding: 0 4px;
        margin-right: auto;
      }

      &__info {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        
        svg {
          width: 14px;
          height: 14px;
          fill: white;
        }

        span {
          margin-left: 4px;
          font-size: 12px;
          color: white;
        }
      }
    }
  }

  & &__info {
    margin-top: 11px;
    .__info-subtitle {
      margin-top: 2px;

      &_title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        font-weight: 500;
        color: #8c8f92;
      }
    }

    .__info-title,
    .__info-title .__info-title_action,
    .__info-title .__info-title_action .__info-title_action_item {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .__info-title {
      &_title {
        font-size: 16px;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: var(--color-default);
        margin-right: 12px;
      }

      &_action {
        margin-left: auto;

        &_item {
          margin-right: 8px;

          &:last-child {
            margin-right: 0;
          }

          svg {
            width: 16px;
            height: 16px;
            fill: #909397;
          }

          span {
            margin-left: 3px;
            font-size: 12px;
            font-weight: 500;
            color: #363638;
          }
        }
      }
    }
  }
}
</style>
