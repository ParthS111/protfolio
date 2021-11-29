import React, { Component } from 'react'
import './Style.css'
export default class ContactUs extends Component {
    render() {
        return (
            <section className="contactus " id="contactid" >
          <div className="container headings text-center">
            <h1 className="text-center  font-weight-bold">ContactUs</h1>
            <p className="text-capitalize pt-3">We're Here to Help And Answer Any Question You Might Have.He Look Forward To Hearing From You. </p>
         </div>
         <div className="container  justify-content-center ">
           <div className="row">
             <div className="col-lg-10 col-md-8 col-10  ">
              <form action="">
                <div className="form-group">
                   <input type="email" className="form-control" placeholder="Enter email" required id="email"/>
                </div>
                <div className="form-group">                 
                  <input type="text" className="form-control" placeholder="Enter Your name" required id="username"/>
                </div>
                <div className="form-group">                 
                  <input type="number" className="form-control" placeholder="Enter Your Number" required id="username"/>
                </div>
                <div className="form-group">
                    <textarea className="form-control" placeholder="Enter Your Message"  rows="5" id="comment"></textarea>
                </div>
                <div className="d-flex justify-content-center form-button">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              </form>
             </div>

           </div>

         </div>
         </section>

        )
    }
}
