import React from 'react';
import { NavLink } from 'react-router-dom';

let CategoryLink = (props) => 
    <li>
        <NavLink to={`/categories/${props.category.id}`}
            >{props.category.title}
        </NavLink>
    </li>

export default CategoryLink;