import {combineReducers} from 'redux';
import { addToCartReducer, productReducer, selectedProductReducer} from './productReducer';

console.log("Selected Product, combineReducer Index JS");

const reducers = combineReducers({
    allProducts :productReducer,
    product : selectedProductReducer,
    allCartItems : addToCartReducer,
})


export default reducers;

