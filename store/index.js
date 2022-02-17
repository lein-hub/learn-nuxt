export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  },
}
