import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductPage() {
    return (
        <>
        <Hero/>
        
        <RightSection imageURL="/media/kite.png" productName="Kite" productDec="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" goolePlay="" appleStore="" />
        <LeftSection imageURL="/media/console.png" productName="Console" productDec="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="" learnMore="" />

        <RightSection imageURL="/media/coin.png" productName="Coin" productDec=" Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" goolePlay="" appleStore="" />
        <LeftSection imageURL="/media/kiteconnect.png" productName="Kite Connect API " productDec="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo="" learnMore="" />

        <RightSection imageURL="/media/varsity.png" productName="Varsity mobile" productDec="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" goolePlay="" appleStore="" />
</>
     );
}

export default ProductPage;