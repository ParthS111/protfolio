import React, { Component } from 'react'
import './Style.css'

export default class Pricing extends Component {
    render() {
        return (
               <section className="pricing" id="pricing">
          <div className="container headings text-center">
            <h1 className="text-center text-white font-weight-bold">Our Best Pricing</h1>
         </div>
         <div className="container">
           <div className="row">
             <div className="col-lg-4 col-md-4 col-12">
                <div className="card text-center">
                  <div className="card-header">Basic</div>
                  <div className="card-body">
                    <li>$ <span className="money">20</span> /website</li>
                    <li>Responsive Websites</li>
                    <li> Domain name free</li>
                    <li> Mobile friendly</li>
                    <li>Webmail support</li>
                </div>
                  <div className="card-footer">
                    <a href="">Purchases</a></div>
                </div>
             </div>
             <div className="col-lg-4 col-md-4 col-12 card-second">
              <div className="card text-center">
                <div className="card-header">Standard</div>
                <div className="card-body">
                  <li>$ <span className="money">60</span> /website</li>
                  <li>Responsive Websites</li>
                  <li> Domain name free</li>
                  <li> Mobile friendly</li>
                  <li>Webmail support</li>
              </div>
                <div className="card-footer">
                  <a href="">Purchases</a></div>
              </div>
           </div>
           <div className="col-lg-4 col-md-4 col-12">
            <div className="card text-center">
              <div className="card-header">Unlimited</div>
              <div className="card-body">
                <li>$ <span className="money">80</span> /website</li>
                <li>Responsive Websites</li>
                <li> Domain name free</li>
                <li> Mobile friendly</li>
                <li>Webmail support</li>
            </div>
              <div className="card-footer">
                <a href="">Purchases</a></div>
            </div>
         </div>
           </div>

         </div>
        </section>  
        
        )
    }
}
