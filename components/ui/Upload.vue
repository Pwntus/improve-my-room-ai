import { componentNames } from '#build/components';
<template lang="pug">
#upload.text-center
  input(
    @change="loadFile"
    type="file"
    ref="file"
    accept="image/*"
  )
  button.bg-blue-600.text-gray-100.text-base.font-light.inline-flex.rounded-full.px-4.py-1.mb-4(
    v-if="!imageDataURI"
    @click="$refs.file.click()"
    class="hover:bg-blue-500 lg:text-lg lg:px-6 lg:py-2 lg:mb-16"
  ) Upload
  #output.bg-white(
    v-if="imageDataURI"
    class="ml-[-8px] mr-[-8px] lg:rounded-2xl lg:m-0 lg:p-8"
  )
    img.mx-auto(
      :src="imageDataURI"
      class="lg:rounded-md lg:mb-8"
    )
    .text-left.p-2(
      v-if="output"
      class="bg-[#f1f1f1] lg:rounded-md lg:p-4"
    )
      span.output(v-html="markdownToHtml(output)")
</template>

<script>
import { mapActions } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { marked } from 'marked'

import useAppStore from '@/stores/app'
import { EventBus } from '@/services'

export default {
  name: 'Upload',
  data: () => ({
    output: null,
    imageDataURI: null
  }),
  methods: {
    ...mapActions(useAppStore, ['createPrediction']),
    markdownToHtml(str) {
      return marked.parse(str)
    },
    loadFile(e) {
      const file = event.target.files[0]
      if (!file) return

      const reader = new FileReader()

      reader.onload = () => {
        this.imageDataURI = reader.result
        this.doCreatePrediction()
      }

      // Limit the image size to 928x928 pixels while maintaining aspect ratio
      this.resizeImage(file, 928, 928, (resizedFile) => {
        reader.readAsDataURL(resizedFile)
      })
    },
    resizeImage(file, maxWidth, maxHeight, callback) {
      const image = new Image()
      image.src = URL.createObjectURL(file)
      image.onload = () => {
        const width = image.width
        const height = image.height

        let newWidth = width
        let newHeight = height

        if (width > maxWidth || height > maxHeight) {
          const aspectRatio = width / height
          if (width > height) {
            newWidth = maxWidth
            newHeight = maxWidth / aspectRatio
          } else {
            newHeight = maxHeight
            newWidth = maxHeight * aspectRatio
          }
        }

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = newWidth
        canvas.height = newHeight

        context.drawImage(image, 0, 0, newWidth, newHeight)

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], file.name, { type: file.type })
          callback(resizedFile)
        }, file.type)
      }
    },
    async doCreatePrediction() {
      this.loading = true
      try {
        this.output = '...'

        this.$nextTick(() => {
          window.scrollTo(0, document.body.scrollHeight)
        })

        await this.createPrediction({
          image: this.imageDataURI
        })
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async webhookEvent(payload) {
      const { output, query } = payload

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const doScroll = window.scrollY >= scrollableHeight

      this.output = output.join('')

      if (doScroll) {
        this.$nextTick(() => {
          window.scrollTo(0, document.body.scrollHeight)
        })
      }
    }
  },
  mounted() {
    EventBus.$on('webhook:event', this.webhookEvent)
  },
  beforeUnmount() {
    EventBus.$off('webhook:event', this.webhookEvent)
  }
}
</script>

<style lang="stylus" scoped>
#upload
  input[type="file"]
    display none

  span.output
    display inline-block

    :deep(hr)
      margin 8px 0
      border 0
      border-top 1px solid #dadada

    :deep(ol), :deep(ul)
      margin 0 0 16px 16px
      list-style unset

      li
        margin 16px 0 0 16px

    :deep(code)
      padding 1px 6px 2px
      font-size 14px
      background #e3e3e3
      border 1px solid #cdcdcd
      border-radius 4px

    :deep(pre)
      margin 16px 0
      padding 8px 16px
      background #333
      color #fff
      border-radius 6px

      code
        padding 0
        background none
        border none
</style>
