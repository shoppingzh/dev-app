<template>
  <div>
    <Navbar />
    <div class="top">
      <transition name="fade">
        <ds-hovered-image src="https://cdn.dribbble.com/users/1363206/screenshots/7374566/media/a3a2cb3e0483356941e04824615b1f9d.jpg" />
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

export default {
  components: {
    Navbar,
    Links,
    Utils
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .page-container {
    background-color: @background-color-system;
    @media screen and (min-width: 1400px) {
      padding: 30px 12.5%;
    }
  }
  .top {
    position: relative;
    height: 65vh;
    background-color: #6cd3cf;
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
