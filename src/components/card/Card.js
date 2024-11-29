import { useState } from 'react';
import '../card/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
 const getCartData = (item) =>{
 props.handleDataFromChild(item);
 }
  return (
    <div>
      <div className='card'>
        <img className='image' src={props?.path} alt='' />
        <p className='product-name'>{props?.productName} </p>
        <p className='price'>&#8377; {props?.price} </p>

        <div className='hoverImg'>
          <img className='image-cap' src={props?.hoverImg} alt='' /> <br />

          <div className='btn'>
            <button className='btn-left' onClick={() => {getCartData(props.item) }} >Add to Cart</button>
            <button className='btn-right'>Quick View</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
