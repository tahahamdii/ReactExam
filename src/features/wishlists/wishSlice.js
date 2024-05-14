import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishListItems: [],
    wishListCount: 0,
    alertMessage: null 

};

export const wishSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
       // Add to wishlist
         addToWishList: (state, action) => {
            const existingItem = state.wishListItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                state.alertMessage = 'Item already in wishlist';
                setTimeout(() => {
                    state.alertMessage = null;
                }, 3000);
            } else {
          state.wishListItems.push(action.payload);
            state.wishListCount += 1;
            state.alertMessage = 'Added to wishlist';
            setTimeout(() => {
                state.alertMessage = null;
            }, 3000);
        }
    },
    // Remove from wishlist
    removeFromWishList: (state, action) => {
        state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload);
        state.wishListCount -= 1;
        state.alertMessage = 'Removed from wishlist';
        setTimeout(() => {
            state.alertMessage = null;
        }, 3000);
    },
    // Clear wishlist
    clearWishList: (state) => {
        state.wishListItems = [];
        state.wishListCount = 0;
        state.alertMessage = 'Wishlist cleared';
        setTimeout(() => {
            state.alertMessage = null;
        }, 3000);
    }
}});

export const { addToWishList, removeFromWishList, clearWishList } = wishSlice.actions;

export default wishSlice.reducer;