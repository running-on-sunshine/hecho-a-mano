import React from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import ProductList from './product-list';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ products: state.products })

let AllProductsScreen = (props) => 
    <div>
        <NavBar />
        <Sidebar />
        <h1>Check out all the products!</h1>
        <ProductList products={ props.products } />
    </div>

let ConnectedAllProductsScreen = connect(mapStateToProps)(AllProductsScreen);

export default ConnectedAllProductsScreen;