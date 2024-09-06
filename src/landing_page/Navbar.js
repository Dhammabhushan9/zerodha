import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return ( 
        <div className='conatiner ' >

             
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <Link class="navbar-brand " to="/">
<img  style={{width:"20%"}} src="/media/mainlogo.svg" alt="" />
  </Link>
  

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to='/signup'>Signup <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/about">About</Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/product">Products</Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/pricing">Pricing</Link>
      </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/signup">Support</Link>
      </li>
     
     
     
    </ul>
    
 
</nav>

        </div>
     );
}

export default Navbar;