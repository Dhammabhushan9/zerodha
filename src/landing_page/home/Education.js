import React from 'react';

function Education() {
    return ( 
       <div className='container p-5 mt-4'>
        <div className='row'>
            <div className='col-6'>
                <img style={{width:"80%"}} src="/media/education.svg" alt="education" />
            </div>

            <div className='col-6 mt-4  '>
            <h3>Free and open market education</h3>
            <br/>
            <p>Varsity, the largest online stock market education book in the world 
             covering everything from the basics to advanced trading.</p> 
             <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">Varsity   <i class="fa fa-arrow-right" ></i></a></p>
            
                 <p>TradingQ&A, the most active trading and
                     investment community in India for all your market related queries.</p>
 <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">
 TradingQ&A    <i class="fa fa-arrow-right" ></i></a></p>
            </div>
        </div>
       </div>
     );
}

export default Education;