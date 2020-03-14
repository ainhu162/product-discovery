import { combineReducers } from 'redux';
import productReducer from './products'
const appReducers = combineReducers({
    products: productReducer,
})

export default appReducers;