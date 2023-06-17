import React from 'react'
import { useWishlist } from 'react-use-wishlist'
const WishlistBtn = ({ item }) => {

    const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist()

    const toggleWishListBtn = (product) => {
        if (inWishlist(product.id)) {
            removeWishlistItem(product.id)
        }
        else {
            addWishlistItem(product)
        }
    }
    return (
        <>
            <button onClick={() => toggleWishListBtn(item)}>
                {
                    inWishlist(item.id) ? 'added' : 'add'
                }
            </button>
        </>
    )
}

export default WishlistBtn