<template>
  <div class="page-container">
    <a-row>
      <a-col :xl="{ span: 16, offset: 4 }">
        <links-card />
      </a-col>
    </a-row>
  </div>
</template>

<script>

import LinksCard from './LinksCard'
export default {
  components: {
    LinksCard
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
