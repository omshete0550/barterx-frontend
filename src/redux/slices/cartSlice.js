import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct: (state, action) => {
            const productId = action.payload;
            const removedProduct = state.products.find(product => product._id == productId);
            state.products = state.products.filter(product => product._id !== productId);
            state.total = state.total - (removedProduct.price * removedProduct.quantity);
            state.quantity -= 1;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;