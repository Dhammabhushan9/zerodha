import React from 'react';

function Trust() {
    return (
       <div className='container p-5'>
        <div className='row  ' style={{margin: '0 auto'}}>
          <div className='col-6 mt-5 pt-3'>
            <h2>Trust with confidence</h2>
            <br/>
            <h5>Customer-first always</h5>
           
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
           
           
            
          
            <br/>
            <h5>No spam or gimmicks</h5>
           
            <p> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
           
        
            <br/>
            <h5>The Zerodha universe</h5>
           
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>
           
           <br/>
         
            <h5>Do better with money</h5>
           
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money. </p>
           

            </div>

            <div className='col-6 mt-5'>
           <img style={{width: "90%"}} src="media/trust.png" alt="trust" />
          </div>
          <img className='pt-5' style={{width:"60%",margin:"0 auto"}} src="media/pressLogos.png" alt="press image" />
        </div>
       </div>
      );
}

export default Trust;