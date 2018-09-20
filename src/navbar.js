import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ cartItems: state.cartItems });

let NavBar = (props) =>
    <nav className='nav-bar'>
        <NavLink to="/">Et Setera</NavLink>
        <div>
            <NavLink to="/cart">Cart { `(${props.cartItems.length})` }</NavLink>
        </div>
    </nav>

let ConnectedNavBar = connect(mapStateToProps)(NavBar);

export default ConnectedNavBar;