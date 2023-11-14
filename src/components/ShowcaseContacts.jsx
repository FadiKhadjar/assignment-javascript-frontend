import React from 'react'
import lines from '../assets/images/background-lines.svg'


const ShowcaseContacts = () => {
  return (
    <>
        <section className="showcase-contact">
            <img className="background-lines" src={lines} alt="" />
            <div className="container">
                <div className="content">
                    <nav>
                        <a className="active" href="index.html">Home</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <h1>Let's Connect</h1> 
                </div> 
            </div>
        </section>
    </>
  )
}

export default ShowcaseContacts