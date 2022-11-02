<script setup lang="ts">
import { NIcon } from "../icon";

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  imageCounts: {
    type: Number,
    default: 1,
  },
  likeCounts: {
    type: Number,
    default: 1,
  },
  viewCounts: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  r18: Boolean,
});

const emits = defineEmits<{
  (e: "click-like"): void;
  (e: "click-author"): void;
  (e: "click-article"): void;
}>();

const unitConverter = (count: number) =>
  count < 1000 ? `${count}` : `${(count / 1000).toFixed(1)}k`;
</script>

<template>
  <li class="n-grid-content__item">
    <div class="n-grid-content__item__banner" @click="emits('click-article')">
      <div class="__image-container">
        <img :src="props.imageSrc" />
      </div>
      <div class="__image-marker">
        <div class="__image-marker__tag" v-if="props.r18">18+</div>
        <div class="__image-marker__info">
          <n-icon class="__icon" icon-name="document" />
          <span>{{ props.imageCounts }}</span>
        </div>
      </div>
    </div>
    <div class="n-grid-content__item__info">
      <div class="__info-title">
        <h3 class="__info-title_title" @click="emits('click-article')">
          {{ props.title }}
        </h3>
        <div class="__info-title_action">
          <div class="__info-title_action_item">
            <n-icon
              class="__clickable"
              icon-name="like"
              @click="emits('click-like')"
            />
            <span>{{ unitConverter(props.likeCounts) }}</span>
          </div>
          <div class="__info-title_action_item">
            <n-icon icon-name="view" />
            <span>{{ unitConverter(props.viewCounts) }}</span>
          </div>
        </div>
      </div>
      <div class="__info-subtitle">
        <h6 class="__info-subtitle_title" @click="emits('click-author')">
          @{{ props.author }}
        </h6>
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
    cursor: pointer;

    &:hover {
      .__image-container {
        img {
          transform: scale(1.08);
        }
      }
    }

    .__image-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
        transition: transform 600ms cubic-bezier(0.27, 0.39, 0, 1);
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
      padding: 14px 16px 0 14px;

      &__tag {
        // -webkit-backdrop-filter: blur(10px);
        // backdrop-filter: blur(10px);
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.35);
        color: white;
        font-size: 12px;
        font-weight: 500;
        padding: 0 6px;
      }

      &__info {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-left: auto;

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

        svg,
        span {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
        }
      }
    }
  }

  & &__info {
    margin-top: 11px;
    .__info-subtitle {
      &_title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        font-weight: 500;
        color: #8c8f92;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
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
        cursor: pointer;
        margin-right: 12px;

        &:hover {
          text-decoration: underline;
        }
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
            fill: #a1a4a7;

            &.__liked,
            &.__clickable:hover {
              cursor: pointer;
              fill: var(--color-primary);
            }
          }

          span {
            margin-left: 3px;
            font-size: 12.5px;
            font-weight: 500;
            color: #363638;
          }
        }
      }
    }
  }
}
</style>
