import React from 'react';
import { connect } from 'react-redux';

let MapStateToProps = state => ({ products: state.products });

let CartScreen = (props) => 
    <div>
        <h1>My Cart</h1>
        
    </div>

let ConnectedCartScreen = connect(MapStateToProps)(CartScreen);

export default ConnectedCartScreen;