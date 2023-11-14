import React from 'react'
import imageOfFounder from '../assets/images/woman-with-tablet.png'
import whiteWavyLines from '../assets/images/background-white-wavy-lines.svg'

const AboutCompany = () => {
  return (
    <>
        <section className="about-company">
            <div className="container">
                <div className="founder">
                    <img className="img-of-founder" src={imageOfFounder} alt=" woman walking and holding a tablet" />
                    <img className="background-white-wavy-lines" src={whiteWavyLines} alt="" />
                    <div className="blue-position-box">
                        <h6>Sammantha Brown, <span>Founder</span></h6>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                    </div>
                </div>
                <div className="content">
                    <div className="section-title">
                        <p>About Company</p>
                        <h2>We Are Business Consulting & Credit Repair Experts</h2> 
                    </div>
                    <div className="section-paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                    </div>
                    <div className="center-content">
                        <a className="btn-black" href="NotFound">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                        <a className="btn-play" href="NotFound" ><i className="fa-sharp fa-solid fa-play"></i></a>
                        <p>Intro Video</p>
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default AboutCompany