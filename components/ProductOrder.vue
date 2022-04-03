<template>
  <div class="flex flex-wrap">
    <div class="px-2 mx-2">{{ product.name[locale.language] }}</div>
    <div class="px-2 mx-2 flex flex-wrap">
      <div class="cursor-pointer p-2" @click="changeQty(product, -1)">-</div>

      <div class="p-2">{{ product.qty }}</div>
      <div class="cursor-pointer p-2" @click="changeQty(product, 1)">+</div>
    </div>
    <div class="px-2 mx-2">
      {{ prices[locale.locale].currency }}{{ product.price[locale.locale] }}
    </div>
    <div class="px-2 mx-2">
      {{ prices[locale.locale].currency
      }}{{
        Math.floor(
          product.price[locale.locale] *
            product.qty *
            (1 + prices[locale.locale].gst / 100)
        )
      }}
    </div>
    <div
      class="px-2 mx-2 text-blue-700 cursor-pointer"
      @click="remove(product)"
    >
      Remove
    </div>
  </div>
</template>

<script>
import prices from '@/components/Prices.json'

export default {
  props: {
    product: Object,
  },
  data() {
    return {
      prices,
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
      this.$store.commit('cart/changeQty', { product, change })
    },
  },
}
</script>
