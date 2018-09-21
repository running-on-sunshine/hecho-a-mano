import React from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import ProductDetail from './product-detail';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ products: state.products });

let ProductDetailScreen = (props) => {
    let urlId = props.match.params.id;
    let product = props.products.find(product => product.id === urlId);
    return <div> 
        <NavBar />
        <Sidebar />
        <ProductDetail product={product}/>
    </div>
};

let ConnectedProductDetailScreen = connect(mapStateToProps)(ProductDetailScreen);

export default ConnectedProductDetailScreen;