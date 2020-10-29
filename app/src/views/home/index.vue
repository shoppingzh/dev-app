<template>
  <div>{{ appName }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      appName: 'app/name'
    })
  }
}
</script>

<style>

</style>
