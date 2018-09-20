import React from 'react';
import ProductRow from './product-row';

let ProductList = (props) => 
    <ul className='product-list'>
        { props.products.map(product =>
            <ProductRow product={product} key={product.id} />
        ) }  
    </ul>

export default ProductList;