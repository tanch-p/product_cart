<template>
  <div class="">
    Order Details
    <div v-if="orderList.length === 0">Cart is Empty</div>
    <div v-else>
      <div>
        <div class="flex flex-wrap">
          <div
            v-for="(header, index) in orderHeaders"
            :key="index"
            class="px-2 mx-2"
          >
            {{ header }}
          </div>
        </div>
        <ProductOrder
          v-for="product in orderList"
          :key="product.id"
          :product="product"
        />
      </div>
      <div>
        <div>Order Summary</div>
        <div>Total Items: {{ orderList.length }}</div>
        <div>Amount Payable: {{ getTotal() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from '@/components/ProductOrder.vue'
import prices from '@/components/Prices.json'

const orderHeaders = ['Product Details', 'Qty', 'Price', 'Total (incl GST)']

export default {
  name: 'OrderDetails',
  components: {
    ProductOrder,
  },
  data() {
    return {
      cart: [],
      orderHeaders,
      prices,
    }
  },
  computed: {
    locale() {
      return this.$store.state.country.option
    },
    orderList() {
      return this.$store.state.cart.list
    },
  },
  methods: {
    getTotal() {
      const reducer = (prev, curr) => {
        return prev + curr.price[this.locale.locale] * curr.qty
      }
      return (
        this.orderList.reduce(reducer, 0) *
        (1 + prices[this.locale.locale].gst / 100)
      )
    },
  },
}
</script>
