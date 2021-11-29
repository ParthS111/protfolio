import React from 'react';
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";


import './App.css'
import Home from './component/Home/Home';
import Services from './component/Service/Services';
import About from './component/About/About';
import ContactUs from './component/Contact/ContactUs';
import Pricing from './component/Pricing/Pricing';
import NewsLetter from './component/News/NewsLetter';
import HappyClient from './component/Happylient/HappyClient';
import WebCreated from './component/WebCreated/WebCreated';
import Offer from './component/Offer/Offer';
import Main from './component/Main';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div /* className="App" */>      
         <BrowserRouter>            
                <Routes>
                  <Route exact path="/" element={<Main/>}/>                 
                  <Route path='/service' element={<Services/>}/>
                  <Route path='/about' element={About}/>
                  <Route path='/contact' element={ContactUs}/>
                  <Route path='/pricing' element={Pricing}/>
                  <Route path='/newsletter' element={NewsLetter}/>
                  <Route path='/happyclient' element={HappyClient}/>
                  <Route path='/webcreated' element={WebCreated}/>
                  <Route path='/offer' element={()=><Offer/>}/>
                </Routes>
          </BrowserRouter>      
    </div>
  );
}

export default App;
