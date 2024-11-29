import logo from './logo.svg';
import './App.css';
import {createContext, useEffect, useState } from 'react';
import Header from './components/header/Header.js';
import MainApp from './MainApp.js';
import {Routes, Route } from 'react-router-dom';
import CheckOut from './components/checkout/CheckOut.js';
import Payment from './components/payment/Payment.js';


function App() {
  const [cartData, setCartData] = useState([]);
  // const UserContext = createContext();

  function handleDataFromMain (cartList){
    setCartData(cartList);
    // console.log("cartData",cartData);    
  }
  useEffect(()=>{
    handleDataFromMain();
  },[])

  return (

    <div className="App">
    <Header />
    <Routes>
        <Route path="/" element={<MainApp />}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/payment" element={<Payment cartData={cartData}/>}/>
      </Routes>      
    </div>
  );
}

export default App;
