import React from 'react'
import whiteWavyLinesSection from '../assets/images/background-white-wavy-lines-section.svg'




const OurServices = () => {
  return (
    <>
        <section className="our-services">
            <div className="container">
                <div className="section-title">
                    <p>Our Services</p>
                    <h2>We Provide The Best Service For Consulting</h2>
                </div>
                <div className="columns">
                    <div className="col1">
                        <span><i className="fa-thin fa-horizontal-rule"></i></span>
                        <h3>Business Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a className="btn-arrow" href="NotFound"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="col1">
                        <span><i className="fa-thin fa-horizontal-rule"></i></span>
                        <h3>Startup Business</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a className="btn-arrow" href="NotFound"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="col1">
                        <span><i className="fa-thin fa-horizontal-rule"></i></span>
                        <h3>Financial Advice</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a className="btn-arrow" href="NotFound"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                    <div className="col1">
                        <span><i className="fa-thin fa-horizontal-rule"></i></span>
                        <h3>Risk Management</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <a className="btn-arrow" href="NotFound"><i className="fa-light fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="center-content">
                    <a className="btn-transparent" href="NotFound">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
            <img className="white-wavy-lines-section" src={whiteWavyLinesSection} />
        </section>
    </>
  )
}

export default OurServices