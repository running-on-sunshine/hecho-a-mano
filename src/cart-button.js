import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ cartItems: state.cartItems });

let CartButton = (props) => {
    let button = props.cartItems.includes(props.product)
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