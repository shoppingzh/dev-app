<template>
  <div class="ds-swiper swiper-container">
    <div class="ds-swiper__inner swiper-wrapper">
      <slot />
    </div>
    <slot name="pagination">
    </slot>
    <slot name="nav-prev">
    </slot>
    <slot name="nav-next">
    </slot>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay, EffectCube, EffectFade, EffectFlip, EffectCoverflow } from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay, EffectCube, EffectFade, EffectFlip, EffectCoverflow])
import 'swiper/swiper-bundle.css'

export default {
  name: 'DsSwiper',
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  provide() {
    return {
      dsSwiper: this
    }
  },
  computed: {
    hasPagination() {
      return this.typeOptions && this.typeOptions.pagination
    },
    hasNavigation() {
      return this.typeOptions && this.typeOptions.navigation
    }
  },
  watch: {
    typeOptions() {
      this.$nextTick(() => {
        this.init()
      })
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.$swiper && this.$swiper.destroy()
  },
  methods: {
    init() {
      const options = Object.assign({}, this.options, {
        init: false
      })
      this.$swiper = new Swiper(this.$el, options)
      this.$swiper.on('init', swiper => {
        this.$emit('init', swiper)
      })
      this.$swiper.on('slideChange', swiper => {
        this.$emit('change', swiper)
      })
      this.$swiper.init()
    },
    next() {
      this.$swiper && this.$swiper.slideNext()
    },
    prev() {
      this.$swiper && this.$swiper.slidePrev()
    }
  }
}
</script>

<style>

</style>
