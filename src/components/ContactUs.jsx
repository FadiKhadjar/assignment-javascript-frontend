import React from 'react'



const ContactUs = () => {
  return (
    <>
        <section className="contact-us">
            <div className="container">
                <div className="contact-box">
                    <div className="box">
                        <a className="btn-contact" href="#"><i className="fa-sharp fa-solid fa-location-dot"></i></a>
                        <div>
                            <h3>Visit us</h3>
                            <p>Sveavägen 31 <span>111 34 STOCKHOLM</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <a className="btn-contact" href="#"><i className="fa-solid fa-phone"></i></a>
                        <div>
                            <h3>Call us</h3>
                            <p>+46 (8) 121 470 50 <span>1+46 (8) 121 470 51</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <a className="btn-contact" href="#"><i className="fa-regular fa-envelope"></i></a>
                        <div>
                            <h3>Email us</h3>
                              <p>info@crito.com <span>support@crito.com</span></p>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContactUs