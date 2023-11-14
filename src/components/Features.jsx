import React from 'react'
import handshake from '../assets/images/icon-handshake.svg'
import lightBolb from '../assets/images/icon-light-bolb.svg'
import finance from '../assets/images/icon-finance.svg'
import box from '../assets/images/icon-box.svg'

const Features = () => {
  return (
    <>
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2> 
                    <a className="btn-yellow" href="NotFound">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <div className="management">
                    <a className="advice" href="#">
                        <img src={handshake} alt="icon of a handshake symbol" />
                        <h3>Business Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                    <a className="advice" href="#">
                        <img src={lightBolb} alt="icon of a light bolb symbol" />
                        <h3>Startup Business</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                    <a className="advice" href="#">
                        <img src={finance} alt="icon of a bar chart symbol" />
                        <h3>Financial Advice</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                    <a className="advice" href="#">
                        <img src={box} alt="icon of a box with gear symbol" />
                        <h3>Risk Management</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </a>
                </div>
            </div>
        </section>    

    </>
  )
}

export default Features