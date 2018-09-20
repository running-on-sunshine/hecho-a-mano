import React from 'react';
import { connect } from 'react-redux';

let ProductDetail = (props) => 
    <div>
        <h1>{props.product.title}</h1>
        <div>
            <img className='product-image' src={props.product.imageURL} alt='product'/>
        </div>
        <p>{ props.product.title }</p>
        <p>{ props.product.description }</p>
        <p>{ props.product.price }</p>
        <button
            onClick={() => {
                props.dispatch({ type: 'ADD_TO_CART', product: props.product })
            }}
        >Add to Cart</button>
    </div>

let ConnectedProductDetail = connect()(ProductDetail);

export default ConnectedProductDetail;