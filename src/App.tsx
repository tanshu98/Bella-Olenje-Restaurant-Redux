import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/Landing Page/LandingPage';
import LoginSingUp from './components/Login SignUp/LoginSignUp';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import ContactUs from './components/Contact Us/ContactUs';


function App() {
  return (
   <BrowserRouter>

   {/* <Navbar /> */}
   <Routes>
    <Route path="" element={<><Navbar/><Outlet/><Footer /></>}>
    <Route path='/' element={<LandingPage />} />
    <Route path='/home' element={<Home />} />
    <Route path='/Product' element={<Product />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='*' element={<PageNotFound />} />
    </Route>
    <Route path='/login-signup' element={<LoginSingUp />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
