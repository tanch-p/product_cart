export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, product) {
    product.qty = 1
    let found = false
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === product.id) {
        found = true
        break
      }
    }
    if (!found) {
      state.list.push(product)
    }
  },
  remove(state, product) {
    let index = -1
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === product.id) {
        index = i
        break
      }
    }
    state.list.splice(index, 1)
  },
  changeQty(state, { product, change }) {
    let changedProduct = {}
    for (let i = 0; i < state.list.length; i++) {
      if (state.list[i].id === product.id) {
        changedProduct = state.list[i]
        changedProduct.qty += change
        state.list.splice(i, 1, changedProduct)
        break
      }
    }
  },
}
