import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = (state, props) => ({ inCart: state.cartItems.includes(props.product) });

let CartButton = (props) => {
    let button = props.inCart
    ? {type: 'REMOVE_FROM_CART', text: 'Remove from Cart'}
    : {type: 'ADD_TO_CART', text: 'Add to Cart'}
    return <button
        onClick={() => {
            props.dispatch({ type: button.type, product: props.product })
        }}
    >{button.text}</button>
};

let ConnectedCartButton = connect(mapStateToProps)(CartButton);

export default ConnectedCartButton;