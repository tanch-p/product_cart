<template>
  <div class="mx-2 w-min text-center border border-gray-700 ">
    <div class="px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-36 w-36"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="product.svg" />
      </svg>
    </div>
    <p class="text-blue-700 font-semibold">
      {{ product.name[locale.language] }}
    </p>
    <p>
      {{ prices[locale.locale].currency }}{{ product.price[locale.locale].toFixed(2) }}
    </p>
    <div
      class="bg-blue-900 hover:bg-blue-600 text-white cursor-pointer select-none w-full py-1"
      @click="addToCart(product)"
    >
       {{ langpack.addToCart[locale.language] }}
    </div>
  </div>
</template>

<script>
import prices from '@/components/Prices.json'
import langpack from '@/language/langpack.json'

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      prices,
      langpack
    }
  },
  computed: {
    locale() {
      return this.$store.state.country.option
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit('cart/add', product)
    },
  },
}
</script>
