import React, { Component } from 'react'

import './Style.css';
export default class About extends Component {
  render() {
    return (
      <>
      <footer className="footer-section" id="footerdiv">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12 footerdiv">
                  <div>
                      <h3 className="text-uppercase">About Parth's Company</h3>
                      <p>The endpoint of the POST request must be able to process the chart data. Finally.</p>
                  </div>

                </div>
                
                <div className="col-lg-4 col-md-6 col-12 footerdiv text-center">
                    <div>
                        <h3 className="text-uppercase">Navigation Links</h3>
                      <li><a href="">Home</a></li>
                      <li><a href="">Service</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Price</a></li>
                    </div>

                </div>

                <div className="col-lg-4 col-md-12 col-12 footerdiv">
                    <div>
                        <h3 className="text-uppercase">About Parth's Company</h3>
                        <p>The endpoint of the POST request must be able to process the chart data. Finally.</p>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12  col-12 ">
                              <div className="input-group mb-3">
                                <input type="text" className="form-control news-letter" placeholder="Your Email"/>
                                <div className="input-group-append">
                                  <span className="input-group-text">SubScribr</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>
                   </div>              
                  </div>
            <div className="mt-5 text-center">
              <h4 className="font-weight-bold">&copy; Copyright 2020, Parth's Corporation</h4>
            </div>
            <div className="scrolltop float-right">
              <a href="#topheader"><i className="fa fa-arrow-up" onclick="topfunction()" id="myBtn"></i></a>
              
            </div>
            
            </div>
          </footer>
      </>
    )
  }
}
