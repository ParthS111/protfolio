import React, { Component } from 'react'

import './Style.css'
export default class Home extends Component {
    render() {
        return (
            <div className="header " id="topheader">
          
          <nav className="navbar navbar-expand-lg fixed-top ">
              <div className="container text-uppercase p-2">             
                <a className="navbar-brand font-weight-bold text-white ml-auto fixed-top" href="#">Parth's Company</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"> <i class="fa fa-bars icon-color"></i></span>
                </button>              
                <div className="ml-auto collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto text-uppercase">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Price</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutusid">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactid">Contact</a>
                    </li>                 
                  </ul>                 
                 </div>
               </div>
          </nav>

          <section className="header-section">
            <div className="center-div">
              <h1 className="font-weight-bold">We are The Web Devloper.</h1>
              <p>We create the world best Websites.</p>
              <div className="header-button">
                <a href="#aboutusid">AboutUs</a>
                <a href="#contactid">ContactUs</a>
              </div>
            </div>
          </section>
        </div>
        )
    }
}
