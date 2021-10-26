import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hello this is my first page</h1>
                <Typed
                className="typed-text"
                strings={["Web design","Web developer","Facebook Ads","Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="" className="btn-main-offer"> click</a>
            </div>
        </div>
    )
}

export default Header
