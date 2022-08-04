import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Features from './containers/features/Features';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContactUs from './components/navbar/pages/ContactUs';
import Home from './components/navbar/pages/Home';
import Login from './components/navbar/pages/Login/Login';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <BrowserRouter>
     
      <Routes>
        <Route path="/" exact element ={<Home/>}/>
        <Route path="/ContactUs"  element ={<ContactUs/>}/>
        <Route path="/login"  element ={<Login/>}/>
       </Routes>

      </BrowserRouter>
      
      
       </div>
       <Features/>
       <Footer/>
   
    
  </div>
);

export default App;