import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList } from '../features/wishlists/wishSlice';
const WishList = () => {
    const wishListItems = useSelector(state => state.wishlist.wishListItems);
    const dispatch = useDispatch();

    const handleRemoveFromWishList = (itemId) => {
        dispatch(removeFromWishList(itemId));
    };

    return (
        <div>
            <h2>Wishlist</h2>
            {wishListItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishListItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <h3>{item.title}</h3>
                                <button onClick={() => handleRemoveFromWishList(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishList;
