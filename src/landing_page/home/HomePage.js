import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import OpenAccount from '../OpenAccount'

import Hero from './Hero'
import Pricing from './Pricing'
import Education from './Education'
import Trust from './Trust';
function Homepage() {
    return ( 
        <>
        <Navbar />
        <Hero />
        <Trust/>
        <Pricing />
        <Education />
        <OpenAccount />
        <Footer />
        

       </>
     );
}

export default Homepage;