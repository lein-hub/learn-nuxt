import { fetchCartItems } from "~/api"

export const state = () => ({
  cartItems: [],
})

// export const mutations = {
//   addCartItem(state, cartItem) {
//     const newCartItem = {
//       ...cartItem,
//       imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
//     }
//     state.cartItems.push(newCartItem)
//     console.log('담김');
//   },
// }

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },

  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

export const actions = {
  async FETCH_CART_ITEMS({commit}) {
    const response = await fetchCartItems()
    console.log(response);
    commit('setCartItems', response.data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })))

  },
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch('FETCH_CART_ITEMS')
    // const response = await fetchCartItems()
    // storeContext.commit('setCartItems', response.data.map(item => ({
    //   ...item,
    //   imageUrl: `${item.imageUrl}?random=${Math.random()}`
    // })))
  }
}

export const getters = {
  state(state) {
    return state;
  }
}
