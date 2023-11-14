import React from 'react'
import thumbsUp from '../assets/images/thumbs-up.svg'
import strategic from '../assets/images/strategic.svg'
import expDesign from '../assets/images/exp-design.svg'
import ai from '../assets/images/ai.svg'
import image from '../assets/images/image.png'


const WhyChooseUs = () => {
  return (
    <>
        <section className="why-choose-us">
            <div className="background-box-child"></div>
            <div className="container">
                <div className="content">
                    <div className="section-title">
                        <p>Why Choose Us</p>
                        <h2>Why We Are The Best Business Consulting Agency</h2>
                    </div>
                    <a className="col1" href="NotFound">
                        <img src={thumbsUp} alt="logo of thumbs up" />
                        <div className="title">
                            <h3>Process Excellence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </a>
                    <a className="col1" href="NotFound">
                        <img src={strategic} alt="logo of a pentagon shape" />
                        <div className="title">
                            <h3>Strategic Planning</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>  
                        </div>
                    </a>
                    <a className="col1" href="NotFound">
                        <img src={expDesign} alt="logo of a vector" />
                        <div className="title">
                            <h3>Experience Design</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </a>
                    <a className="col1" href="NotFound">
                        <img src={ai} alt="logo of a ai head" />
                        <div className="title">
                            <h3>Artificial Inteligence</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur.</p>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <img className="image" src={image} alt="two women sitting and talking about content shown on ipad" />
            </div>
        </section> 
    </>
  )
}

export default WhyChooseUs