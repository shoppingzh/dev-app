<template>
  <div class="ds-swiper-item swiper-slide">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DsSwiperItem',
  provide() {
    return {
      dsSwiperItem: this
    }
  },
  inject: ['dsSwiper']
}
</script>

<style>

</style>
