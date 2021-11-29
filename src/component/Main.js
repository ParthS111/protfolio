import React, { Component } from 'react'
import Home from './Home/Home';
import WebCreated from './WebCreated/WebCreated';
import Pricing from './Pricing/Pricing';
import Offer from './Offer/Offer';
import NewsLetter from './News/NewsLetter';
import Services from './Service/Services';
import ContactUs from './Contact/ContactUs';
import About from './About/About';
import HappyClient from './Happylient/HappyClient';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Home/>
                <WebCreated/>
                <Services/>               
                <Offer/>
                 <Pricing/>
               
                <HappyClient/>
               
                <ContactUs/>
                 <NewsLetter/>
                <About/>



            </div>
        )
    }
}
