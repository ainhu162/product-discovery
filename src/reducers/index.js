import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';
import cartReducer from './cart.js';
const appReducers = combineReducers({
    products: productsReducer,
    product: productReducer,
    cart: cartReducer
})

export default appReducers;