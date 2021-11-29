import React, { Component } from 'react'
import './Style.css';

export default class Services extends Component {
    render() {
        return (
            <section className="serviceoffier" >
          <div className="container headings text-center">
            <h1 className="text-center font-weight-bold"> WHAT WE DO OFFER</h1>
            <p className="text-center">we have to send a POST request on the server with the available data.</p>
            <div className="">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-10 offset-1">
                  <div className="names my-3 text-left">
                    <h1>HTML</h1>
                    <div className="progress w-100">
                      <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" style={{width:"100%"}}>100%</div>
                  </div>
                  </div>
                  <div className="names my-3 text-left">
                    <h1>ReactJs</h1>
                    <div className="progress w-75">
                      <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" style={{width:"75%"}}>50%</div>
                      </div>
                    </div>
                  <div className="names my-3 text-left">
                    <h1>React Native</h1>
                    <div className="progress w-75">
                    <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{width:"75%"}}>75%</div>
                      </div>
                  </div>
                   <div className="names my-3 text-left">
                    <h1>Css</h1>
                    <div className="progress w-50">
                    <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" style={{width:"75%"}}>70%</div>
                      </div>
                   </div>

                </div>
                
                <div className="col-lg-5 col-md-12 col-12 text-left servicdiv" >
                  <div className="row ">
                    <div className="col-lg-2 col-md-2 col-2 service-icons">
                      <i className="fa-3x fa fa-desktop" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-10 col-10">
                      <h2> Website Devlopment</h2>
                      <p>we have to send a POST request on the server with the available data. nivo then creates.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 service-icons">
                      <i className="fa-3x fa fa-wifi" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-10 col-10">
                      <h2>Degital Marketing</h2>
                      <p>we have to send a POST request on the server with the available data. nivo then creates.</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-2 service-icons">
                      <i className="fa-3x fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-10 col-10">
                      <h2>Support 24/7</h2>
                      <p>we have to send a POST request on the server with the available data. nivo then creates.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </section>

        )
    }
}
