<template>
  <div>
    <Navbar />
    <div class="top">
      <transition name="fade">
        <ds-hovered-image :src="bgImage" />
      </transition>
    </div>
    <a-row :gutter="[0, 20]" class="page-container">
      <a-col>
        <links />
      </a-col>
      <a-col>
        <utils />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Links from './Links'
import Utils from './Utils'
import bgImage from '@/assets/images/bg.png'

export default {
  components: {
    Navbar,
    Links,
    Utils
  },
  data() {
    return {
      bgImage
    }
  }
}
</script>

<style lang="less" scoped>
  .page-container {
    background-color: var(--background-color-placeholder);
    transition: background .5s;
    @media screen and (min-width: 1400px) {
      padding: 30px 12.5%;
    }
  }
  .top {
    position: relative;
    height: 65vh;
    background-color: #6cd3cf;
    [data-theme="dark"] & {
      background-color: var(--background-color-system);
    }
    img {
      position: absolute;
      top: 40%;
      left: 50%;
      height: 80%;
      width: auto;
      transform: translate(-50%, -40%);
      @media (max-width: 700px) {
        width: 90%;
        height: auto;
      }
    }
  }
</style>
