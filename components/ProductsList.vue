/ * eslint-disable no-console * /
<script>
import fs from 'fs'
import path from 'path'
import ProductsCard from '@/components/ProductsCard.vue'

const productsDirectory = path.join(process.cwd(), 'products')
const fileNames = fs.readdirSync(productsDirectory)
const products = fileNames.map((fileName) => {
  const fullPath = path.join(productsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath)
  const productJson = JSON.parse(fileContents)
  return {
    fileName,
    productJson,
  }
})

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

<template>
  <div>
    <div>Simple Page Cart</div>
    <div>
      <p>Products</p>
      <div class="flex flex-wrap">
        <ProductsCard
          v-for="product in products"
          :key="product.id"
          :product="product.productJson"
        />
      </div>
    </div>
  </div>
</template>
