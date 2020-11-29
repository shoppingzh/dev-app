<template>
  <img
    v-bind="$attrs"
    class="ds-hovered-image"
    :class="{ 'is-active': active }"
    v-on="$listeners"
    @mouseenter="active = true">
</template>

<script>
export default {
  name: 'DsHoveredImage',
  data() {
    return {
      active: false
    }
  }
}
</script>

<style lang="less" scoped>
  .ds-hovered-image {
    transition: all .5s ease-in-out;
    cursor: pointer;
    opacity: .95;
    &:hover {
      box-shadow: 0 0 15px 2px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .05);
      opacity: 1;
      [data-theme="dark"] & {
        box-shadow: 0 0 15px 2px rgba(200, 200, 200, .15),  0 2px 3px rgba(200, 200, 200, .05);
      }
    }
  }
</style>
