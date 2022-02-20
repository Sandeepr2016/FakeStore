import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Product from './product';
import axios from 'axios';
import { fetchProducts, setProducts } from '../redux/actions/productActions';

const ProductList = ()=>{
    const products = useSelector((state)=> state);
    const divTop = {"paddingTop": "30px"};
    const dispatch = useDispatch();
    console.log('in ProductList');

    // <<<<<<<<<<< Async Call in component >>>>>>>>>>>>>
    //fetching Products functions
    /*const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        // useEffect()
        fetchProducts();
    },[]) */

    //<<<<<<<<<<<  Thunk call >>>>>>>>>>>>>
    useEffect(()=>{
        // useEffect()
        dispatch(fetchProducts());
    },[])


    return (
        <div className='ui grid container' style={divTop}>
            <Product/>
        </div>
    )
};

export default ProductList;