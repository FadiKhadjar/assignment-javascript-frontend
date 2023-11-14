import React from 'react'
import wavyLines from '../assets/images/background-wavy-lines.svg'


const Newsletter = () => {
  return (
    <>
        <section className="newsletter">
            <img className="background-wavy-lines" src={wavyLines} alt="" />
            <div className="container">
                <h2>Get News Updates By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com" />
                    <button className="btn-yellow">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Newsletter