import React from 'react'
import image1 from '../assets/images/Image1.png'
import image2 from '../assets/images/Image2.png'
import image3 from '../assets/images/Image3.png'
import image4 from '../assets/images/Image4.png'




const MeetOutTeam = () => {
  return (
    <>
        <section className="our-team">
            <div className="container">
                  <div className="content">
                    <div className="section-title">
                        <p>Meet Our Team</p>
                        <h2>Experience Team Members</h2>
                    </div>
                    <a className="btn-yellow" href="#">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <div className="images">
                    <div className="image">
                        <img src={image1} />
                        <h4>Kristine Palmer</h4>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="image">
                        <img src={image2} />
                        <h4>Mark Aubri</h4>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="image">
                        <img src={image3} />
                        <h4>Kimberly Hansen</h4>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="image">
                        <img src={image4} />
                        <h4>Justin Willoman</h4>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </section>
    </>
  )
}

export default MeetOutTeam