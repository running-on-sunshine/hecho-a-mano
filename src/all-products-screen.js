import React from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import ProductList from './product-list';
import fetchProducts from './fetch-products';
import { connect } from 'react-redux';

let AllProductsScreen = (props) => 
    <div>
        <NavBar />
        <Sidebar />
        <h1>Check out all the products!</h1>
        <ProductList products={props.products} />
    </div>

export default connect(
    state => ({ products: state.products })
    )(fetchProducts(AllProductsScreen));