import { createStore } from 'redux';
import reducer from './reducer';
import products from './products';
import categories from './categories';

let initialState = {
    products: products,
    categories: categories,
    cartItems: []
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;