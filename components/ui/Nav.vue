import { componentNames } from '#build/components';
<template lang="pug">
nav.fixed.inset-x-0.top-0.z-10
  .container.mx-auto.p-2.flex.items-center.text-gray-100.text-sm.content-center.flex-wrap(
    class="lg:p-4"
  )
    nuxt-link(to="/") Improve My Room AI
    .grow
    a.text-gray-100.inline-flex.px-2.py-2(
      href="https://twitter.com/PontusAurdal"
      class="hover:text-gray-400"
      target="_new"
    )
      svg.w-6.h-6(
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      )
        path(
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        )
    a.text-gray-100.inline-flex.px-2.py-2(
      href="https://twitter.com/PontusAurdal"
      class="hover:text-gray-400"
      target="_new"
    )
      svg.w-8.h-8(
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      )
        path(
          d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
        )
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="stylus" scoped>
nav
  background-color rgba(0, 0, 0, 0.8) !important
  -webkit-backdrop-filter saturate(180%) blur(20px)
  backdrop-filter saturate(180%) blur(20px)
</style>
