import React from 'react';

function RightSection({imageURL,
    productName, productDec,tryDemo,
    learnMore,goolePlay,appleStore}) {
    return ( 
    
        <div className='container'>
        <div className='row'>

        <div className='col-6'>
            <h1>{productName}</h1>
            <br/>
            <p>{productDec}</p>
            <br/>
            <div style={{display:"flex"}}>
            <p><a class="link-offset-2 link-underline  link-underline-opacity-0" href={tryDemo}>tryDemo<i class="fa fa-arrow-right" ></i></a></p>
            <p style={{ marginLeft: '20px' }}><a class="link-offset-2 link-underline link-underline-opacity-0" href={learnMore}>learnMore<i class="fa fa-arrow-right" ></i></a></p>
            
            </div>
           

        </div>


        <div className='col-6'>
            <img style={{width:"95%"}} src={imageURL} alt="imageURL" />
        </div>
            
        
        </div>
    </div>

    
    );
}

export default RightSection;