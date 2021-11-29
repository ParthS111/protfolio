import React from 'react'
import Typed from 'react-typed';
const Details = () => {
    return (
        <div className="header-wraper-Details">
            <div className="main-info sticky-top">
                <div class="d-flex justify-content-center bd-highlight">
                    <div class="row no-gutters bg-light position-relative">
                        <div class="col-md-6 mb-md-0 p-md-4">
                            <img src="..." class="w-100" alt="..." />
                        </div>
                        <div class="col-md-6 position-static p-4 pl-md-0">
                            <h5 class="mt-0">Columns with stretched link</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <a href="#" class="stretched-link">Go somewhere</a>
                        </div>
                    </div>
                    <div class="row no-gutters bg-light position-relative">
                        <div class="col-md-6 mb-md-0 p-md-4">
                            <img src="..." class="w-100" alt="..." />
                        </div>
                        <div class="col-md-6 position-static p-4 pl-md-0">
                            <h5 class="mt-0">Columns with stretched link</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <a href="#" class="stretched-link">Go somewhere</a>
                        </div>
                    </div>
                    <div class="row no-gutters bg-light position-relative">
                        <div class="col-md-6 mb-md-0 p-md-4">
                            <img src="..." class="w-100" alt="..." />
                        </div>
                        <div class="col-md-6 position-static p-4 pl-md-0">
                            <h5 class="mt-0">Columns with stretched link</h5>
                            <p className='text-uppercase'> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <a href="#" class="stretched-link">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
                <br /><br /><br />
                <div class="w-75 p-3" style={{ backgroundColor: "red" }}>Width 25%</div>


            </div>


        </div>
    )
}

export default Details
