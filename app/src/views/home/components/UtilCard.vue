<template>
  <div class="util-card" :class="{ 'util-card--active': active }" @mouseenter="active = true" @mouseleave="active = false">
    <div class="util-card__image">
      <img :src="util.image">
    </div>
    <div class="util-card__body">
      <div class="util-card__title">{{ util.title }}</div>
      <div class="util-card__descritpion">{{ util.description }}</div>
      <div class="util-card__icon">
        <a-icon type="arrow-right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    util: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="less" scoped>
  .util-card {
    height: 300px;
    position: relative;
    overflow: hidden;
    background-color: var(--background-color-system);
    border: 1px solid var(--border-color-light);
    border-radius: 5px;
    transition: all .5s;
    color: var(--text-color-secondary);
    &:hover {
      box-shadow: 0 0 5px 3px rgba(100, 100, 100, .03), 2px 2px 2px rgba(100, 100, 100, .05);
    }
    &--active {
      .util-card__image img {
        transform: scale(1.1);
      }
    }
    &__image {
      height: 150px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .5s;
      }
    }
    &__body {
      padding: 10px;
    }
    &__title {
      margin-bottom: 12px;
      font-size: 16px;
    }
    &__icon {
      text-align: right;
    }
  }
</style>
