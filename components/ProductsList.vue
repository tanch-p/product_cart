<template>
  <div>
    <div>Simple Page Cart</div>
    <div>
      <p>Products</p>
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

const products = [AgentCall, AgentVisit]

export default {
  name: 'ProductsList',
  components: {
    ProductsCard,
  },
  data() {
    return {
      products,
    }
  },
}
</script>
