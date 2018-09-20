import React from 'react';
import NavBar from './navbar';
import Sidebar from './sidebar';
import ProductList from './product-list';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ categories: state.categories, products: state.products });

let CategoryScreen = (props) => {
    let urlId = props.match.params.id;
    let category = props.categories.filter(category => category.id === urlId);
    let products = props.products.filter(product => product.categoryId === category[0].id);
    return <div>
        <NavBar />
        <Sidebar />
        <h1>{category[0].title}</h1>
        <ProductList products={products} />
    </div>
};

let ConnectedCategoryScreen = connect(mapStateToProps)(CategoryScreen);

export default ConnectedCategoryScreen;