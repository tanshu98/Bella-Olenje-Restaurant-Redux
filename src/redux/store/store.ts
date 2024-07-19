import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../reducers/ProductSlice'
import CartReducer from "../reducers/CartSlice";


export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: CartReducer,

    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch