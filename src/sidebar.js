import React from 'react';
import CategoryLink from './category-link';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = state => ({ categories: state.categories });

let Sidebar = (props) => 
    <ul className='sidebar'>
        <li><NavLink to="/">All Products</NavLink></li>
        { props.categories.map(category => 
            <CategoryLink category={category} key={category.id} />
        ) }
    </ul>

let ConnectedSidebar = connect(mapStateToProps)(Sidebar);

export default ConnectedSidebar;