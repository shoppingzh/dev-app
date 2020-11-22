<template>
  <div class="page-container">
    <a-row :gutter="[0, 20]">
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
import LinksCard from './LinksCard'
import UtilCard from './UtilCard'

export default {
  components: {
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
</style>
