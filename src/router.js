import React from 'react';
import AllProductsScreen from './all-products-screen';
import CategoryScreen from './category-screen';
import ProductDetailScreen from './product-detail-screen';
import CartScreen from './cart-screen';
import NotFound from './not-found';
import { HashRouter, Route, Switch } from 'react-router-dom';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={AllProductsScreen} />
                <Route exact path="/products/:id" 
                    render={(props) => <ProductDetailScreen {...props} /> }
                />
                <Route exact path="/categories/:id" 
                    render={(props) => <CategoryScreen {...props} /> }
                />
                <Route path="/cart" component={CartScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;