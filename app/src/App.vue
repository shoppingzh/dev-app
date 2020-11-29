<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      theme: 'app/theme'
    })
  },
  watch: {
    theme(newVal) {
      document.body.setAttribute('data-theme', newVal)
    }
  }
}
</script>

<style>
</style>
