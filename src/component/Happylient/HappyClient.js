import React, { Component } from 'react'

import './Style.css';
import {profile } from '../../images/profile.jpg'
import {profile2 } from '../../images/profile2.jpg'
import {profile3 } from '../../images/profile3.jpg'

export default class HappyClient extends Component {
    render() {
        return (
            
        <section className="happyclient container" id="aboutusid" >
          <div className="container headings text-center">
            <h1 className="text-center  font-weight-bold">Our Happy Clients</h1>
            <p className="text-capitalize pt-3">Our Satisfied Customer Says</p>
         </div>
         <div id="demo" className="carousel slide" data-ride="carousel">

        <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>
           <div className="carousel-inner">
            <div className="carousel-item active">
                  <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                          <div className="box">
                            <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                            <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                              <h1>Zaken Luby</h1>
                              <h2>Web Devloper</h2>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-12">
                        <div className="box">
                          <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                          <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                          <h1>Zaken Luby</h1>
                          <h2>Web Devloper</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="box">
                        <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                        <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                        <h1>Zaken Luby</h1>
                        <h2>Web Devloper</h2>
                      </div>
                    </div>
                 </div>
             </div>
             <div className="carousel-item ">
              <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <div className="box">
                        <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                        <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                          <h1>Zaken Luby</h1>
                          <h2>Web Devloper</h2>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="box">
                      <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                      <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                      <h1>Zaken Luby</h1>
                      <h2>Web Devloper</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="box">
                    <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                    <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                    <h1>Zaken Luby</h1>
                    <h2>Web Devloper</h2>
                  </div>
                </div>
             </div>
         </div>
             <div className="carousel-item ">
                    <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                            <div className="box">
                                <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                                <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                                <h1>Zaken Luby</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="box">
                            <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                            <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                            <h1>Zaken Luby</h1>
                            <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                        <div className="box">
                            <a href="#"> <img src='../../images/profile.jpg' className="img-fluid img-thumbnail" alt=""/></a>
                            <p className="m-4"> we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.</p>
                            <h1>Zaken Luby</h1>
                            <h2>Web Devloper</h2>
                        </div>
                        </div>
                </div> 
             </div>        
         
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        
          </div>
        
        </div>
          
         </section>
        )
    }
}
