<template>
  <div>
    <a-card title="工具中心" hoverable>
      <template #default>
        <ds-swiper :options="swiperOptions">
          <ds-swiper-item
            v-for="(page, index) in pages"
            :key="index">
            <a-row :gutter="[20, 20]">
              <a-col v-for="(util, index2) in page" :key="index2" :span="4">
                <a-card>
                  <img
                    slot="cover"
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />  
                </a-card>
              </a-col>
            </a-row>
          </ds-swiper-item>
          <div slot="pagination" class="swiper-pagination"></div>
          <!-- <span slot="nav-prev" class="swiper-button-prev"></span>
          <span slot="nav-next" class="swiper-button-next"></span> -->
        </ds-swiper>
      </template>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    this.swiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next'
      // },
      autoplay: {
        delay: 3000
      }
    }
    return {
      pageSize: 5,
      utils: []
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
      this.utils.push({
        title: '工具'
      })
    }
  }
}
</script>

<style>

</style>