import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct,removeSelectedProduct,addtoCart} from '../redux/actions/productActions';

const ProductDetail= ()=>{
    const {productId} = useParams();
    const product = useSelector((state)=> state.product);
    const cartItems = useSelector((state) => state.allCartItems);
    const {image, title, price, category, description} = product;
    const divTop = {"paddingTop": "30px"};
    const dispatch = useDispatch();
    
    const fetchProductDetail =async () =>{
        const response = await axios.get('https://fakestoreapi.com/products/'+ productId);
        dispatch(selectedProduct(response.data));
    }

    const addtoCartClickHandler = () => {
      console.log(JSON.stringify(cartItems) + "cart Items");
      dispatch(addtoCart([product]));
    }
    useEffect(()=>{
    if(productId && productId!=="") fetchProductDetail();    
    return ()=> dispatch(removeSelectedProduct())
    },[productId]);

    return (
    <div className="ui grid container" style={divTop}>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt="product" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="javascript:void(0)">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0" onClick={addtoCartClickHandler}>
                  <div className="hidden content">
                    <i className="shop icon" ></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>                
    )
};

export default ProductDetail;