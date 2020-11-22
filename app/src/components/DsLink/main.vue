<template>
  <a target="__blank" class="ds-link">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'DsLink'
}
</script>

<style lang="less" scoped>
  .ds-link {
    &:hover {
      background: linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
