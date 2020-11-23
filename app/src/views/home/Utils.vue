<template>
  <div>
    <a-card title="工具中心" hoverable>
      <template #default>
        <ds-swiper :options="swiperOptions">
          <ds-swiper-item
            v-for="(page, index) in pages"
            :key="index"
            style="padding-bottom: 50px;">
            <a-row :gutter="[50, 20]">
              <a-col v-for="(util, index2) in page" :key="index2" :xs="12" :sm="8" :xl="6" :xxl="6">
                <util-card :util="util" />
              </a-col>
            </a-row>
          </ds-swiper-item>
          <div slot="pagination" class="swiper-pagination"></div>
        </ds-swiper>
      </template>
    </a-card>
  </div>
</template>

<script>
import utils from '@/data/utils'
import UtilCard from './components/UtilCard'

export default {
  components: {
    UtilCard
  },
  data() {
    this.swiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      }
    }
    return {
      pageSize: 8,
      utils: [...utils, ...utils, ...utils, ...utils, ...utils, ...utils]
    }
  },
  computed: {
    pages() {
      const pages = []
      for (let i = 0; i < this.utils.length; i += this.pageSize) {
        pages.push(this.utils.slice(i, i + this.pageSize))
      }
      return pages
    }
  },
  created() {
    for (let i = 0; i < 50; i++) {
      // this.utils.push({
      //   title: '工具',
      //   image: 'https://img2.mukewang.com/szimg/5c18d2d8000141c506000338-360-202.jpg'
      // })
    }
  }
}
</script>

<style>

</style>