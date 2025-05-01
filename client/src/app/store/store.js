
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-Slice'
import dataReducer from './data-Slice'
import cartReducer from './cart-Slice'
import userReducer from './user-slice'
import analyticalReducer from './analyticla-slice'
import orderReducer from './order-slice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        cart: cartReducer,
        user: userReducer,
        analytical: analyticalReducer,
        order: orderReducer
    },
})

export default store;