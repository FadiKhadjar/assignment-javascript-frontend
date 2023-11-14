import React from 'react'
import showcase from '../assets/images/showcase-image.svg'
import backgroundLines from '../assets/images/background-lines.svg'

const Showcase = () => {


  return (
    <>
        <section className="showcase">
            <img className="background-lines" src={backgroundLines} alt="" />
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-yellow" href="NotFound">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                    <a className="btn-transparent" href="NotFound">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                    <img src={showcase} alt="showcase image of a man in a suit with tablet" />
                </div>
            </section>
    </>
  )
}

export default Showcase