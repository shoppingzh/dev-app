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

<style>
</style>
