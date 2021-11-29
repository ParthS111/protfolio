import React, { Component } from 'react'

import './Style.css'
export default class NewsLetter extends Component {
    render() {
        return (
            <section className="subscribe mt-5" id="subscribeid" >
            <div className="container headings text-center">
              <h1 className="text-center text-uppercase font-weight-bold">SubScribe TO our newsletter</h1>
              </div>

              <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-12 ">
                                <div className="input-group mb-3">
                                <input type="text" className="form-control news-letter" placeholder="Your Email"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">SubScribr</span>
                                </div>
                                </div>
                        </div>
                    </div>
              </div>             
          </section>

        )
    }
}
