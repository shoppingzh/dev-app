<template>
  <a-card hoverable title="优秀文章">
    <template #default>
      <a-row>
        <a-col :xs="24" :md="16" :lg="14" class="links">
          <a-row>
            <a-col
              v-for="(link, index) in showLinks"
              :key="index"
              class="link-item">
              <ds-link :href="link.url">{{ link.title }}</ds-link>
            </a-col>
          </a-row>
          <a-button
            v-if="hasMore"
            type="danger"
            icon="menu"
            size="small"
            class="more-btn"
            @click="handleShowMore">更多</a-button>
        </a-col>
        <a-col :xs="24" :md="8" :lg="10">
          <img :src="img" class="animate__bounceInUp animate__animated">
        </a-col>
      </a-row>
      <a-modal v-model="modal.more" width="800px" :footer="null" title="所有文章">
        <all-links />
      </a-modal>
    </template>
  </a-card>
</template>

<script>
import links from '@/data/links'
import img from '@/assets/images/creativity.png'
import AllLinks from './AllLinks'

export default {
  components: {
    AllLinks
  },
  data() {
    return {
      links,
      img,
      modal: {
        more: false
      }
    }
  },
  computed: {
    showLinks() {
      return this.links.slice(0, 10)
    },
    hasMore() {
      return this.showLinks.length < this.links.length
    }
  },
  methods: {
    handleShowMore() {
      this.modal.more = true
    }
  }
}
</script>

<style lang="less" scoped>
  .link-item {
    margin-bottom: 8px;
  }
  .more-btn {
    margin-top: 15px;
  }
</style>