import React from 'react';
import CategoryLink from './category-link';
import { API_URL } from './env';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class FetchCategories extends React.Component {
    componentDidMount() {
        fetch(API_URL + '/category')
        .then(res => res.json())
        .then(categories => {
            this.props.dispatch({
                type: 'LOAD_CATEGORIES',
                categories: categories
            });
        });
    }

    render(){
        return <Sidebar {...this.props } />
    }
}

let Sidebar = (props) => 
    <ul className='sidebar'>
        <li><NavLink to="/">All Products</NavLink></li>
        { props.categories.map(category => 
            <CategoryLink category={category} key={category.id} />
        ) }
    </ul>


export default connect(
    state => ({ categories: state.categories })
)(FetchCategories);