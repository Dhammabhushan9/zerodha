import React, { useState } from 'react';

function Signup() {

    const[phone, setPhone]=useState('')

    function handlePhone(e){
         setPhone(e.target.value)
    }
    return ( 
    <div className='container signup-page '>
        <div className='row'>

            <div className='col-8'>
                <img src='/media/signup.png'alt=''/>
            </div>

            <div className='col-4'>
                <h2>Signup now</h2>
                <p>Or track your existing application.</p>
                <br/>
                <label htmlFor="phone">Phone Number:</label>

                <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        value={phone}
        onChange={handlePhone}
        maxLength="15" // Limit input length
        pattern="[0-9]*" // Allow only numbers
        required
        style={{ padding: '10px', fontSize: '16px', width: '100%' }}
      />
                <br/>
                <br/>
                <p style={{fontSize:"11px"}}>You will receive an OTP on your number</p>
                <br/>
                <br/>
                <button className='btn btn-primary '>Continue</button>
            </div>
        </div>
    </div>
     );
}

export default Signup;