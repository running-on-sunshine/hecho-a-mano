let addToCart = (oldState, action) => {
    let newCart = [...oldState.cartItems, action.product];
    return {
        ...oldState, 
        cartItems: newCart 
    }
};

let removeFromCart = (oldState, action) => {
};

let reducers = {
    'ADD_TO_CART': addToCart,
    'REMOVE_FROM_CART': removeFromCart
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
}

export default reducer;