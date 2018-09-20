import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ products: state.products });

let ProductRow = (props) => 
    <Link to={`/products/${props.product.id}`}>
        <li className='product-row'>
            <div>
                <img className='product-image' src={props.product.imageURL} alt='product'/>
            </div>
            <p>{ props.product.title }</p>
            <p>{ props.product.description }</p>
            <p>{ props.product.price }</p>
        </li>
    </Link> 

let ConnectedProductRow = connect(mapStateToProps)(ProductRow);

export default ConnectedProductRow;