import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ cartCount: state.cartItems.length });

let NavBar = (props) =>
    <nav className='nav-bar'>
        <NavLink to="/">Et Setera</NavLink>
        <div>
            <NavLink to="/cart">Cart { `(${props.cartCount})` }</NavLink>
        </div>
    </nav>

let ConnectedNavBar = connect(mapStateToProps)(NavBar);

export default ConnectedNavBar;