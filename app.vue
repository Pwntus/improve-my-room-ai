<template lang="pug">
#app.min-h-screen
  ui-nav
  nuxt-page.container.mx-auto.p-2(
    v-if="inited"
    class="lg:p-4 pt-16 lg:pt-24"
  )
</template>

<script>
import { mapActions } from 'pinia'

import useAppStore from '@/stores/app'

export default {
  name: 'App',
  data: () => ({
    inited: false
  }),
  methods: mapActions(useAppStore, ['init']),
  async mounted() {
    try {
      await this.init()
      this.inited = true
    } catch (e) {
      console.log('--- failed to init', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  background #f6f6f6
</style>
