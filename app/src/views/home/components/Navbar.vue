<template>
  <div class="navbar" :style="{ ...styles }">
    <a class="navbar__logo" href=".">
      <img :src="logo">
      <a class="navbar__logo-text">前端开发者平台</a>
    </a>
    <div class="navbar__right">
      <a
        v-for="(menu, index) in menus"
        :key="index"
        :href="menu.url"
        target="__blank"
        class="navbar__menu-item">{{ menu.title }}</a>
      <div class="navbar__menu-item">
        <a-switch v-model="dark" :loading="loading.toggleTheme" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
import menus from '@/data/menus'

export default {
  props: {
    transparent: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      alpha: 0,
      logo,
      menus,
      loading: {
        toggleTheme: false
      }
    }
  },
  computed: {
    backgroundColor() {
      return `rgba(255, 255, 255, ${this.alpha})`
    },
    styles() {
      const rgb = this.dark ? '50, 50, 50' : '255, 255, 255'
      return {
        backgroundColor: `rgba(${rgb}, ${this.alpha})`,
        boxShadow: `0 5px 5px 2px rgba(0, 0, 0, ${this.alpha / 10})`
      }
    },
    dark: {
      get() {
        return this.$store.state.app.theme === 'dark'
      },
      set() {
        this.loading.toggleTheme = true
        this.$store.dispatch('app/toggleDarkTheme').finally(() => {
          this.loading.toggleTheme = false
        })
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleWindowScroll, false)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleWindowScroll)
  },
  methods: {
    handleWindowScroll() {
      const height = this.$el.offsetHeight
      const offset = window.pageYOffset / 5
      const ratio = (offset - height) / height
      this.alpha = ratio > 1 ? .95 : ratio
    }
  }
}
</script>

<style lang="less" scoped>
  .navbar {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    overflow: hidden;
    transition: background .5s;
    &:after {
      content: "";
      display: table;
      clear: both;
      visibility: hidden;
    }
    &--shadow {
      box-shadow: 0 2px 1px rgba(0, 0, 0, .45);
    }
    // logo区域
    &__logo {
      display: inline-block;
      padding: 5px 20px;
      height: 100%;
      &-text {
        margin-left: 8px;
        font-family: "SF Pro Text","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: var(--text-color-primary);
        vertical-align: top;
        transition: color .5s;
      }
      img {
        height: 100%;
        vertical-align: top;
      }
    }
    &__right {
      float: right;
    }
    &__menu-item {
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      padding: 0 12px;
      cursor: pointer;
      color: var(--text-color-secondary);
      transition: all .3s;
      &:hover {
        color: var(--text-color-primary);
        font-weight: bold;
      }
    }
  }
</style>
