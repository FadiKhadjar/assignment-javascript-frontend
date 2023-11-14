import React from 'react'
import image from '../assets/images/logotype.svg'


const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="/"><img src={image} alt="crito logotype"/></a>
          <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
          <div className="menu">
            <div className="top-menu">
              <div className="contact-information">
                <div className="content-box">
                    <i className="fa-light fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-light fa-envelope-dot"></i>
                    info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-light fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
              </div>
              <div className="social-media">
                  <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com/X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="main-menu">
              <nav>
                <a className="active" href="/">Home</a>
                <a href="NotFound">Service</a>
                <a href="NotFound">News</a>
                <a href="contacts">Contact</a>
              </nav>
              <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header