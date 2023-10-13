import { componentNames } from '#build/components';
<template lang="pug">
#upload.text-center
  button.bg-blue-600.text-gray-100.text-lg.font-light.inline-flex.rounded-full.px-6.py-2.mb-4(
    class="hover:bg-blue-500 lg:mb-16"
  ) Upload
  #output.bg-white(
    class="ml-[-8px] mr-[-8px] lg:rounded-2xl lg:m-0 lg:p-8"
  )
    b Foo
</template>

<script>
export default {
  name: 'Upload'
}
</script>

<style lang="stylus" scoped></style>
