import {combineReducers} from 'redux';
import { productReducer, selectedProductReducer} from './productReducer';

console.log("Selected Product, combineReducer Index JS");

const reducers = combineReducers({
    allProducts :productReducer,
    product : selectedProductReducer
})


export default reducers;

