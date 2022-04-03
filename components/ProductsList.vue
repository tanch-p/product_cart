<template>
  <div class="flex flex-wrap flex-col items-center">
    <div class="text-lg font-semibold mb-2">
      {{ langpack.title[locale.language] }}
    </div>
    <div>
      <p class="font-semibold text-center mb-2"> {{ langpack.products[locale.language] }}</p>
      <div class="flex flex-wrap">
        <ProductsCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AgentCall from '@/products/AgentCall.json'
import AgentVisit from '@/products/AgentVisit.json'
import ProductsCard from '@/components/ProductsCard.vue'
import langpack from '@/language/langpack.json'

const products = [AgentCall, AgentVisit]

export default {
  name: 'ProductsList',
  components: {
    ProductsCard,
  },
  data() {
    return {
      products,
      langpack,
    }
  },
  computed: {
    locale() {
      return this.$store.state.country.option
    },
  },
}
</script>
