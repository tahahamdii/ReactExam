import { configureStore } from "@reduxjs/toolkit";
import { wishSlice } from "../features/wishlists/wishSlice";


export const store = configureStore({
    reducer: {
        // Define a top-level state field named `wishlist`, handled by `wishSlice`
        wishlist: wishSlice.reducer
    },
});