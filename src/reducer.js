let addToCart = (oldState, action) => {
    let newCart = [...oldState.cartItems, action.product];
    return {
        ...oldState, 
        cartItems: newCart 
    }
};

let removeFromCart = (oldState, action) => {
    let newCart = oldState.cartItems.filter(cartItem => 
        cartItem.id !== action.product.id
        );
    return {
        ...oldState,
        cartItems: newCart
    }
};

let loadProducts = (oldState, action) => {
    return {
        ...oldState,
        products : action.products
    }
}

let reducers = {
    'ADD_TO_CART': addToCart,
    'REMOVE_FROM_CART': removeFromCart,
    'LOAD_PRODUCTS': loadProducts
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
}

export default reducer;