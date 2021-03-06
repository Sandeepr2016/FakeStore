import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : [],
    cartItems : []
}

export const productReducer = (state=initialState, action) => {
    var products = action.payload;
    console.log("Selected Product, productReducer Reducer JS");
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS:
            return ({
                ...state, products
            })
        case ActionTypes.SET_PRODUCTS:
            return ({
                ...state, products
            })
        default:
            return state;
    }
}


export const selectedProductReducer = (state={}, {type, payload}) => {
    console.log("Selected Product, selectedProductReducer Reducer JS");
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state, ...payload
            }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}

export const addToCartReducer = (state=initialState.cartItems, {type, payload}) => {
    console.log("Selected Product, selectedProductReducer Reducer JS");
    var cartItem = payload;
    switch (type) {
        case ActionTypes.ADD_TO_CART :
            return( [
                ...state, ...cartItem
            ])
        default:
            return state;
    }
}


