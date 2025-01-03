import { createSlice } from "@reduxjs/toolkit"

const initialState ={
     products:[
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            quantity: 10
        },

        {
            id: 2,
            name: 'Product 2',
            price: 19.99,
            quantity: 10
        },

        {
            id: 2,
            name: 'Product 3',
            price: 19.99,
            quantity: 10
        },

     ]
}

const productSlice = createSlice({
     name:"products",
     initialState,
     reducer:{
        //actions
     }
})

export default productSlice.reducer
// productSlice.actions
