<template>
  <div class="grid grid-cols-5 items-center border-b border-b-gray-500">
    <div class="px-2 mx-2">{{ product.name[locale.language] }}</div>
    <div class="px-2 mx-2 flex flex-wrap">
      <div class="cursor-pointer p-2 font-bold" @click="changeQty(product, -1)">
        -
      </div>

      <div class="p-2">{{ product.qty }}</div>
      <div class="cursor-pointer p-2 font-bold" @click="changeQty(product, 1)">
        +
      </div>
    </div>
    <div class="px-2 mx-2">
      {{ prices[locale.locale].currency
      }}{{ product.price[locale.locale].toFixed(2) }}
    </div>
    <div class="px-2 mx-2">
      {{ prices[locale.locale].currency
      }}{{ (product.price[locale.locale] * product.qty).toFixed(2) }}
    </div>
    <div
      class="px-2 mx-2 text-blue-700 cursor-pointer"
      @click="remove(product)"
    >
      {{ langpack.remove[locale.language] }}
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
      langpack,
    }
  },
  computed: {
    locale() {
      return this.$store.state.country.option
    },
  },
  methods: {
    remove(product) {
      this.$store.commit('cart/remove', product)
    },
    changeQty(product, change) {
      if (change > 0 || product.qty > 1) {
        this.$store.commit('cart/changeQty', { product, change })
      }
    },
  },
}
</script>
