import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import SignupPage from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";

import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>  
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
      <Route path="/product" element={<ProductPage/>}/>
      <Route path="/support" element={<SupportPage/>}/>

    </Routes>
    <Footer/>
  </BrowserRouter>
);
