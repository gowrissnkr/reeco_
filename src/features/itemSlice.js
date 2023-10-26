import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item : [],
    editProduct : {}
};

const itemSlice = createSlice({
    name : "item",
    initialState,
    reducers : {
        addItem : (state,action) => {
            console.log(action.payload)
            state.item = action.payload
        },
        handleStatusChange : (state,action) => {
            const {id,status} = action.payload
            const product = state.item.find((product) => product.id === id)
            if(product) {
                product.status = status
            }
        },
        handleEditProduct : (state,action) => {
            const editSingleProduct = state.item.filter((product) => product.id === action.payload)
            console.log(editSingleProduct)
            state.editProduct = editSingleProduct;
        },
        updateProduct: (state, action) => {
            const { productId, price, quantity } = action.payload;
            console.log(quantity)
            const productIndex = state.item.findIndex((product) => product.id === productId);
            if (productIndex !== -1) {
              state.item[productIndex].price = price;
              state.item[productIndex].quantity = quantity;
              state.item[productIndex].status = "Price Quantity Updated"
            }
        }
    }
})

export const {addItem,handleStatusChange,handleEditProduct,updateProduct} = itemSlice.actions

export default itemSlice.reducer