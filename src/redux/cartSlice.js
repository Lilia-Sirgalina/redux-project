import { createSlice } from '@reduxjs/toolkit'


export const slice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },

  reducers: {
    addItemToCart: (state, action) => {
      const timeID = new Date().getTime()

      state.cartItems.push({
        id: timeID,
        dishID: action.payload.dish.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.dish.price * action.payload.quantity
      })
    }, 
    
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.cartItemID)
    }
  },
})


export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return total + cartItems.totalPrice 
  }, 0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer