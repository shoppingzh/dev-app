<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { toggle } from '@/utils/theme'

export default {
  computed: {
    ...mapGetters({
      theme: 'app/theme'
    })
  },
  created() {
    document.body.setAttribute('data-theme', this.theme)
    toggle(this.theme)
  }
}
</script>

<style>
</style>
