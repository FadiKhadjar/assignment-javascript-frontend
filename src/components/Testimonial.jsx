import React from 'react'
import imageOfCassandra from '../assets/images/image-cassandra.png'
import imageOfAmanda from '../assets/images/image-amanda.png'
import imageOfJack from '../assets/images/image-jack.png'



const Testimonial = () => {
  return (
    <>
        <section className="testimonial">
            <div className="container">
                <div className="center-content">
                    <div className="section-title">
                        <p>Testimonial</p>
                        <h2>What Our Client Says</h2>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <div className="font-stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={imageOfCassandra} />
                            <div>
                                <h4>Cassandra Warren</h4>
                                <p>Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="font-stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={imageOfAmanda} />
                            <div>
                                <h4>Amanda Tulling</h4>
                                <p>Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="font-stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                        <div className="clients">
                            <img src={imageOfJack} />
                            <div>
                                <h4>Jack McDogglas</h4>
                                <p>Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="center-content">
                    <a className="btn-black" href="NotFound">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial