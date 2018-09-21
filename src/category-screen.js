import React from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import ProductList from './product-list';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ categories: state.categories, products: state.products });

let CategoryScreen = (props) => {
    let urlId = props.match.params.id;
    let category = props.categories.find(category => category.id === urlId);
    let products = props.products.filter(product => product.categoryId === category.id);
    return <div>
        <NavBar />
        <Sidebar />
        <h1>{category.title}</h1>
        <ProductList products={products} />
    </div>
};

let ConnectedCategoryScreen = connect(mapStateToProps)(CategoryScreen);

export default ConnectedCategoryScreen;