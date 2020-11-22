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
        <links-card />
      </a-col>
      <a-col>
        <util-card />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import LinksCard from './LinksCard'
import UtilCard from './UtilCard'

export default {
  components: {
    Navbar,
    LinksCard,
    UtilCard
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
    }
  }
</style>
