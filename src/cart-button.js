import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ cartItems: state.cartItems });

let CartButton = (props) =>
    <button
        onClick={() => {
            props.dispatch({ type: 'ADD_TO_CART', product: props.product })
        }}
    >Add to Cart</button>

let ConnectedCartButton = connect(mapStateToProps)(CartButton);

export default ConnectedCartButton;