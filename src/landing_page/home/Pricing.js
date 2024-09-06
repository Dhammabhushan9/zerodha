import React from 'react';


function Pricing() {
    return (
         <div className='container p-5 '>
            <div className='row'>
                <div className='col-5'>
                    <h1>Unbeatable pricing</h1>
                    <br/>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <br/>
                    <p><a class="link-offset-2 link-underline link-underline-opacity-0" href="#">See pricing <i class="fa fa-arrow-right" ></i></a></p>
                    

                                       

                </div>
                <div className='col-7 p-5 ' style={{display:'flex' , width:"20%"}}>
                    <img src="/media/pricing0.svg" alt=" Free account opening" /> 
                    <section>Free account opening</section>
                    <img src="/media/pricingEquity.svg" alt=" Free equity delivery and direct mutual funds" />
                    <p>Free equity delivery </p>
                    <img src="/media/price.svg" alt=" Intraday and F&O" />
                    <p> Intraday and F&O</p>
                </div>
            </div>
         </div>
         );
}

export default Pricing;