import { ActionTypes } from "../constants/action-types";
import { fakeStoreApi } from "../../apis/fakeStoreApi";

export const setProducts = (products) => {
    console.log('in Actions');
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) => {
    console.log("Selected Product Actions JS");
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product
    }
}

export const removeSelectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}

// <<<<< Thunk action creator -  Doing async Operator >>>> 

export const fetchProducts = () => {    
    return async function (dispatch, getState) {
        const response = await fakeStoreApi.get('/products');
        console.log(response.data);
        dispatch({
            type : ActionTypes.FETCH_PRODUCTS,
            payload : response.data
        })
    }
}


// <<<<<<<<<< Add to Cart - action >>>>>>>>>>>>

export const addtoCart = (cartItem)=>{
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : cartItem
    }
}
