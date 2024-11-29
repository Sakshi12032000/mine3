import React from 'react'
import { useLocation } from 'react-router-dom';
import { useContext} from 'react';

function Payment(props) {
  const location = useLocation();
  console.log("location.state", props);

  // const cartDetails = props.match.params;
  return (
    <div className='payment-container'>
       <div className='payment-details'>
            <div className='user-details'> 
                  <div className='user'>
                    <div className='user-name'> 
                      <span>Delivery Address:</span> <br/>
                      <div className='name'>
                        {location.state.userDetails.fname} {location.state.userDetails.lname}
                      </div>
                      </div>
                  
                  <div className='user-address'>
                    <span>{location.state.userDetails.address}, {location.state.userDetails.cityname}</span> <br/>
                    <span>{location.state.userDetails.statename}, {location.state.userDetails.countryname}</span> <br/>
                    <span>{location.state.userDetails.zipcode}</span>
                  </div>
                 </div>
                 <br/>
                  <div className='user-order'>Order Summary
                    
                  </div>
            </div>
            <div className='price-container'>Price Details
              <div>
                {location.state.totalPrice}
              </div>
            </div>
       </div>
    </div>
  )
}

export default Payment
