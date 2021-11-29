import React, { Component } from 'react'
import './Style.css'

export default class Offer extends Component {
    render() {
        return (
             <section className="Project-work" >
            <div className="container headings text-center">
              <p className="text-center font-weight-bold">MORE THAN 2,000 WEBSITE CREATED.</p>             
            </div>
            <div className="container d-flex justify-content-around align-items-center text-center">
              <div>
                <h1 className="count">1500</h1>
                <p>CMS Installation</p>
              </div>
              <div>
                <h1 className="count">2500</h1>
                <p>Award Wan</p>
              </div>
              <div>
                <h1 className="count">700</h1>
                <p>Happy clients</p>
              </div>
              <div>
                <h1 className="count">500</h1>
                <p>Working on</p>
              </div>
            </div>
          </section>
          

        )
    }
}
