import { componentNames } from '#build/components';
<template lang="pug">
#hero.text-center.text-gray-800.mt-8.pb-4(
  class="lg:mt-16 lg:pb-16"
)
  .text-base.font-medium(
    class="lg:text-xl"
  ) Take a picture of a room and get suggestions on how to improve it.
  .text-3xl.font-medium.mt-2.leading(
    class="lg:text-5xl lg:mt-4"
  )
    | Let AI give you the steps
    br
    | to  
    span.text-transparent.bg-clip-text.bg-gradient-to-r.from-blue-700.to-blue-600 elevate 
    | your room.
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="stylus" scoped>
#hero
  .leading
    line-height 1.15 !important
</style>
