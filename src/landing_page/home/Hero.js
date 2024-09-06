import React from 'react';

function Hero() {
    return ( 
      <div className='container text-center hero-top mb-5'>
          <div className='row P-5' style={{margin: '0 auto'}}>
              <img  style={{width: "80%",margin: '0 auto'}} src="/media/homeHero.png" alt="heropage =img"  className='mb-5' />
     
              <h1>Invest in everything</h1>
             <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
             <button className='btn btn-primary mt-5 p-2 fs-0.2' style={{width:'15%',margin: '0 auto'}}> Sign up or free</button>
           </div>    
      </div>
  
    
    
     
    );
}

export default Hero;