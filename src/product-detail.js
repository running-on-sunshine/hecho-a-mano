import React from 'react';
import CartButton from './cart-button';
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
        <CartButton product={props.product}/>
    </div>

let ConnectedProductDetail = connect()(ProductDetail);

export default ConnectedProductDetail;