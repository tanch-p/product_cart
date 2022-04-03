<template>
  <div class="cursor-pointer" @click="changeLocale(option)">
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
