import { configureStore } from "@reduxjs/toolkit";
import  authReducer from './auth-slice';
import adminProductsSlice from "./admin/products-slice"
import shopProductsSlice from "./shop/products-slice"
import shopAddressSlice from "./shop/address-slice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProducts: adminProductsSlice,
        shopProducts: shopProductsSlice,
        shopAddress : shopAddressSlice,
        

    },
});

export default store;