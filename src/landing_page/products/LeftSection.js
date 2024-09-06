import React from 'react';

function LeftSection({imageURL,
    productName, productDec,tryDemo,
    learnMore,goolePlay,appleStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                 
            <div className='col-6'>
                <img style={{width:"100%"}} src={imageURL} alt="imageURL" />
            </div>
                
            <div className='col-6'>
                <h1>{productName}</h1>
                <br/>
                <p>{productDec}</p>
                <br/>
                <div style={{display:"flex"}}>
                <p><a class="link-offset-2 link-underline  link-underline-opacity-0" href={tryDemo}>tryDemo<i class="fa fa-arrow-right" ></i></a></p>
                <p style={{ marginLeft: '20px' }}><a class="link-offset-2 link-underline link-underline-opacity-0" href={learnMore}>learnMore<i class="fa fa-arrow-right" ></i></a></p>
                
                </div>
                <div>
                    <a style={{ marginRight: '20px' }} href={goolePlay}>
                    <img src="/media/googlePlayBadge.svg" alt="googlePlayBadge" />
                    </a>
                    <a href={appleStore}>
                    <img src="/media/appstoreBadge.svg" alt="googlePlayBadge" />
                    </a>
                </div>

            </div>
            </div>
        </div>
    );
}

export default LeftSection;