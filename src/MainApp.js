import React, { useEffect, useState, createContext } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/header/Header.js';
import Product from './components/product/Product.js';
import shopping from '../src/assets/shopping.png';
import CheckOut from './components/checkout/CheckOut.js';

function MainApp(props) {

    const [cartList, setCartList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartDetails, setCartDetails] = useState({});
    const UserContext = createContext();
    function cartDataFromProduct(data) {
        setCartList([...cartList, data]);
        // setCartDetails([...cartList, data]);
    }
    useEffect(() => {
        const total = cartList.map((item) => (item?.price));
        let sum = 0;
        total.forEach((el) => (sum += Number(el)))
        setTotalPrice(sum)
        // setCartDetails(sum);
    }, [cartList]);

    const handleRemove = (key) => {
        const filterList = cartList.filter((elm) => elm !== cartList[key])
        setCartList(filterList);
    }

    const sendCartData = (cartList) =>{
        setCartDetails(cartList);
    }
    return (
        <div value={cartList} >

            <div className="App">
                Learn React
                {/* <Header /> */}

                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                <button type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><img src={shopping} alt='' /></button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Cart</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div>
                            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                            <table className='table p-3'>
                                <thead>
                                    <th>Sr.no</th>
                                    <th>Product Image</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                </thead>
                                <tbody>
                                    {cartList.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><img src={item?.imgPath} alt="prodcut-image" width="50px" /></td>
                                                <td><p>{item?.productName}</p></td>
                                                <td><p>&#8377; {item?.price}</p></td>
                                                <td><button className='remove-btn' onClick={() => { handleRemove(index) }} >remove</button></td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>

                        </div>

                    </div>
                    <div className="offcanvas-footer">
                        <div className='T-price'>
                            Total Price : &#8377; {totalPrice}
                            <Link to="/checkout">
                                <button className='check-btn'>Check out</button>
                            </Link>

                            {/* <Link to={'/Payment/${cartDetails}'}></Link> */}

                        </div>
                    </div>
                </div>

                <Product cartDataFromProduct={cartDataFromProduct} />

                {/* <CheckOut/> */}
            </div>
        </div>
    );
}


export default MainApp
