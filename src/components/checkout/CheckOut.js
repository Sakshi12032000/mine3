import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CheckOut() {
  const initialInputValues = { fname: "", lname: "", address: "", cityname: "", statename: "", countryname: "", zipcode: "", phnumber: "", mail: "" };
  const [inputValues, setInputValues] = useState(initialInputValues);
  const [errors, setErrors] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log("inputValues", inputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validValues(inputValues));
    setUserDetails(inputValues);
    setInputValues('');
    setSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(inputValues).length === 0) {
      console.log("validValues", inputValues);
    }
  }, [inputValues]);

  const validValues = (inputValues) => {
    let errors = {};
    if (!inputValues.fname) {
      errors.fname = "First Name Required";
    }
    if (!inputValues.lname) {
      errors.lname = "Last Name Required";
    }
    if (!inputValues.address) {
      errors.address = "Address Required";
    }
    if (!inputValues.cityname) {
      errors.cityname = "City Required";
    }
    if (!inputValues.statename) {
      errors.statename = "State Required";
    }
    if (!inputValues.countryname) {
      errors.countryname = "Country Required";
    }
    if (!inputValues.zipcode) {
      errors.zipcode = "Zipcode Required";
    }
    if (!inputValues.phnumber) {
      errors.phnumber = "Phone/Mobile Number Required";
    }
    if (!inputValues.mail) {
      errors.mail = "Email Address Required";
    }
    if (!inputValues.submit) {
      errors.submit = "Please fill the form";
    }
    console.log("errors", errors);
    return errors;
  };
  const id = 123;
  const navigate = useNavigate()
  function paymentDetails() {
    navigate("/Payment", { state: { userDetails: userDetails, id: id } })
  };
console.log("useDetails", userDetails);
  return (
    <div className='checkOut-container'>
      <div className='checkOut-details'>
        <h2>Billing details</h2>
        <h6>Purchases valid for Indian territory only</h6>

        <form action='' onSubmit={handleSubmit}>
          <div className='name-container'>
            <li className='li-name'> <label>First Name</label>
              <input type='text' id='fname' name='fname' value={inputValues.fname} placeholder='First Name' onChange={handleChange} />
              <p>{errors.fname}</p>
            </li>

            <li className='li-name'><label>Last Name</label>
              <input type='text' id='lname' name='lname' value={inputValues.lname} onChange={handleChange} placeholder='Last Name' />
              <p>{errors.lname}</p>
            </li>
          </div>

          <li><label>Street Address</label> <br />
            <input type='text' id='address' name='address' value={inputValues.address} onChange={handleChange} placeholder='Address' />
            <p>{errors.address}</p>
          </li>

          <li><label>Town/City</label> <br />
            <input type='text' id='cityname' name='cityname' value={inputValues.cityname} onChange={handleChange} placeholder='City' />
            <p>{errors.cityname}</p>
          </li>

          <li><label>State</label> <br />
            <input type='text' id='statename' name='statename' value={inputValues.statename} onChange={handleChange} placeholder='State' />
            <p>{errors.statename}</p>
          </li>

          <li><label>Country</label> <br />
            <input type='text' id='countryname' name='countryname' value={inputValues.countryname} onChange={handleChange} placeholder='Country' />
            <p>{errors.countryname}</p>
          </li>

          <li><label>Postcode/ZIP</label> <br />
            <input type='number' id='zipcode' name='zipcode' value={inputValues.zipcode} onChange={handleChange} placeholder='Pincode' maxLength={6} />
            <p>{errors.zipcode}</p>
          </li>

          <li><label>Phone Number</label> <br />
            <input type='tel' id='phnumber' name='phnumber' value={inputValues.phnumber} onChange={handleChange} placeholder='Phone Number' maxLength={10} />
            <p>{errors.phnumber}</p>
          </li>

          <li><label>Email Address</label> <br />
            <input type='email' id='mail' name='mail' value={inputValues.mail} onChange={handleChange} placeholder='Email' />
            <p>{errors.mail}</p>
          </li>

          <li>
            <label>How did you find out about us?</label> <br />
            <select class="form-select" aria-label="Default select example">
              {/* <option selected>Open this select menu</option> */}
              <option value="1">Social Media post</option>
              <option value="2">Advertising</option>
              <option value="3">Friend's Recomendation</option>
            </select>
          </li>

          {inputValues ?
            (<button className='sub-btn' type='submit'>Proceed to Buy</button>) :
            (<button className='sub-btn' onClick={paymentDetails} type='submit'>Proceed to Buy</button>)
            // ( <Link to="/Payment"> <button className='sub-btn' type='submit'>Proceed to Buy</button></Link>)        
          }
        </form>
      </div>
      <pre>{JSON.stringify(inputValues, undefined, 2)}</pre>
    </div>
  )
}

export default CheckOut
