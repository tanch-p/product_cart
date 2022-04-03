<template>
  <div class="flex flex-wrap flex-col items-center mt-4">
    <p class="font-semibold underline text-lg">
      {{ langpack.orderDetails[locale.language] }}
    </p>
    <div v-if="orderList.length === 0">
      {{ langpack.cartEmpty[locale.language] }}
    </div>
    <div v-else>
      <div class="border border-gray-600">
        <div class="grid grid-cols-5 border-b border-b-gray-600 font-semibold">
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
      <div class="w-min ml-auto mt-2">
        <div class="font-semibold underline">
          {{ langpack.orderSummary[locale.language] }}
        </div>
        <div :class="['grid',`${getOrderGrid()}`]">
          <div>{{ langpack.totalItems[locale.language] }}:</div>
          <div>{{ orderList.length }}</div>
        </div>
        <div :class="['grid',`${getOrderGrid()}`]">
          <div>{{ langpack.subtotal[locale.language] }}:</div>
          <div>
            {{ prices[locale.locale].currency }}{{ getTotal().toFixed(2) }}
          </div>
        </div>
        <div :class="['grid',`${getOrderGrid()}`]">
          <div>{{ langpack.gst[locale.language] }}:</div>
          <div>
            {{ prices[locale.locale].currency
            }}{{ (getTotal() * (prices[locale.locale].gst / 100)).toFixed(2) }}
          </div>
        </div>
        <div :class="['grid',`${getOrderGrid()}`]">
          <div>
            <span class="font-semibold">
              {{ langpack.amountPayable[locale.language] }}:</span
            >
          </div>
          <div>
            {{ prices[locale.locale].currency
            }}{{
              (getTotal() * (1 + prices[locale.locale].gst / 100)).toFixed(2)
            }}
          </div>
        </div>
        <div
          class="bg-blue-900 hover:cursor-not-allowed text-white text-center w-[90px] py-3 px-2 font-semibold select-none"
        >
          {{ langpack.checkout[locale.language] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from '@/components/ProductOrder.vue'
import prices from '@/components/Prices.json'
import langpack from '@/language/langpack.json'

export default {
  name: 'OrderDetails',
  components: {
    ProductOrder,
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
    orderList() {
      return this.$store.state.cart.list
    },
    orderHeaders() {
      return [
        langpack.productDetails[this.locale.language],
        langpack.qty[this.locale.language],
        langpack.price[this.locale.language],
        langpack.total[this.locale.language],
      ]
    },
  },
  methods: {
    getTotal() {
      const reducer = (prev, curr) => {
        return prev + curr.price[this.locale.locale] * curr.qty
      }
      return this.orderList.reduce(reducer, 0)
    },
    getOrderGrid(){
      return this.locale.language === 'en' ? 'eng-order-grid' : 'zh-order-grid' 
    }
  },
}
</script>

<style scoped>
.eng-order-grid{
  grid-template-columns: 150px 100px;
}
.zh-order-grid{
  grid-template-columns: 90px 100px;
}
</style>