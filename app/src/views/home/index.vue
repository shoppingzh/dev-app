<template>
  <div class="page">
    <a-row type="flex" align="middle" class="banner">
      <a-col :span="18" class="banner__slogan">
        We are <strong>creating</strong> a new vision for your <strong>products!</strong>
      </a-col>
      <a-col :span="6" class="banner__pic">
        <img :src="pic">
      </a-col>
    </a-row>
    <div class="card"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      pic: 'https://cdn.dribbble.com/users/2760253/screenshots/14579355/media/cd7121e29d37d4eb1311f54e8104abfe.jpg'
    }
  },
  computed: {
    ...mapGetters({
      appName: 'app/name'
    })
  }
}
</script>

<style lang="less" scoped>
  .page {
    padding: 30px;
  }
  .banner {
    padding: 0 20%;
    color: #fff;
    &__slogan {
      padding: 100px;
      font-size: 32px;
    }
    &__pic {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .card {
    width: 300px;
    height: 200px;
    background-image: linear-gradient(to right, lighten(#ea5648, 20%), #ea5648);
  }
</style>
