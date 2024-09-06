import React from 'react';

function Hero() {
    return (  
        <div className='container  '>
                <div className='row'>

                <h1 className=' mb-5 pb-5' >
                We pioneered the discount broking model in India.   
                Now, we are breaking ground with our technology.
                </h1>

                <div className='col-6 mb-5 pb-5 '>
                    <p>
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking
                     all barriers that traders and investors face in India in terms of cost, support, and technology. 
                     We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>

                    <br/>

                    <p>Today, our disruptive pricing models and in-house technology have made
                         us the biggest stock broker in India.</p>

                     <br/>

                     <p>
                     Over 1+ Crore clients place millions of orders every day through our powerful ecosystem
                      of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>    
                </div>

                <div className='col-6'>

                    <p>In addition, we run a number of popular open online educational and community initiatives to 
                        empower retail traders and investors.
                        </p>
                    <br/>

                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with
                     the goal of growing the Indian capital markets.</p>
                    <br/>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what
                     the media is saying about us.</p>
                    <br/>
                </div>
                </div>

  <hr></hr>

            
         <div className='row'>
         <h1>People</h1>
                    
                <div className='col-6'>
                    <img className='image-about-section' src="/media/nithinKamath.jpg" alt="ithinKamath" />
                    <h5 style={{marginLeft:"200px"}}>Nithin Kamath</h5>
                    <p style={{marginLeft:"220px"}}>Founder, CEO</p>
                </div>
                <div className='col-6'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. 
                    Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <br/>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <br/>
                    <p>Playing basketball is his zen.</p>
                </div>
        </div>
        </div> 
    );
}

export default Hero;