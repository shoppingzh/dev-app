<template>
  <div>
    <a-input-search ref="input" v-model="keyword" class="search" placeholder="搜索文章" style="width: 300px;" />
    <a-row>
      <a-col v-for="(link, index) in filterLinks" :key="index" :span="12" class="link-item">
        <ds-link :href="link.url">{{ link.title }}</ds-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import links from '@/data/links'

export default {
  data() {
    return {
      links,
      keyword: ''
    }
  },
  computed: {
    filterLinks() {
      return this.links.filter(link => link.title.indexOf(this.keyword) >= 0)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.input.focus()
    })
  }
}
</script>

<style lang="less" scoped>
  .search {
    margin-bottom: 25px;
  }
</style>
