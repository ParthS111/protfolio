import React, { Component } from 'react'

import './Style.css'
export default class WebCreated extends Component {
    render() {
        return (
            <section className="header-extradiv">
          <div className="container">
            <div className="row">
              <div className="extrs-div col-lg-4 col-md-4 col-12">
                  <a href=""><i className="fa-3x fa fa-desktop" aria-hidden="true"></i></a>
                  <h2> EASY TO USE</h2>
                  <p>Basically, we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.
                     The endpoint of the POST request must be able to process the chart data. Finally, you can customize the returned URL however you like.</p>

              </div>
              <div className="extrs-div col-lg-4 col-md-4 col-12">
                <a href=""><i className="fa-3x fa fa-trophy" aria-hidden="true"></i></a>
                <h2>Awesome Design</h2>
                <p>Basically, we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.
                   The endpoint of the POST request must be able to process the chart data. Finally, you can customize the returned URL however you like.</p>

            </div>
            <div className="extrs-div col-lg-4 col-md-4 col-12">
              <a href=""><i className="fa-3x fa fa-magic" aria-hidden="true"></i></a>
              <h2> EASY TO Customize</h2>
              <p>Basically, we have to send a POST request on the server with the available data. nivo then creates a chart and return its URL in response.
                 The endpoint of the POST request must be able to process the chart data. Finally, you can customize the returned URL however you like.</p>

          </div>

            </div>

          </div>

          
        </section>

        )
    }
}
