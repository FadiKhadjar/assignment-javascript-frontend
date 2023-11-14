import React from 'react'

const Form = () => {
  return (
    <>
        <section className="message">
                <div className="container">
                    <h2>Leave us a message <span>for any information.</span></h2>
                    <form className="registerForm" method="post">
                        <div className="input-field">
                            <input className="name" type="text" id="name" title="Name" placeholder="Name*" tabIndex="1" />
                        </div>
                        <div className="input-field">
                            <input className="email" type="text" id="email" title="Email" placeholder="Email*" tabIndex="2" />
                        </div>
                        <div className="input-field">
                            <input className="yourMessage" type="text" id="yourMessage" title="yourMessage" placeholder="Your Message*" tabIndex="3" />
                        </div>
                    </form>
                    <button className="btn-yellow">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
        </section>
    </>
  )
}

export default Form