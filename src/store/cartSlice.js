import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   items: [],
   deliveryFee: 15,
   freeDeliveryFrom: 200,
}

export const productsSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
    addCartItem: (state, action) => {
        const newProduct = action.payload.product;
        state.items.push({product: newProduct, quantity: 1})
    },
    changeQuantity: (state, action) => {}    
   }
})