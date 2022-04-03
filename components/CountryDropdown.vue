<template>
  <div class="cursor-pointer text-gray-700 block px-4 py-2 rounded-sm border border-gray-400 bg-white hover:bg-gray-300 w-full text-left" @click="changeLocale(option)">
    <nuxt-link :to="switchLocalePath(`${option.locale}`)">{{
      option.text
    }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    option: Object,
  },
  emits: ['response'],
  methods: {
    changeLocale(option) {
      this.$store.commit('country/changeLocale', option)
      this.$emit('response', 'hello from child')
    },
  },
}
</script>
