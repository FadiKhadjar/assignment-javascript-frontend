import React from 'react'
import articleImage1 from '../assets/images/article-image-1.png'
import articleImage2 from '../assets/images/article-image-2.png'
import articleImage3 from '../assets/images/article-image-3.png'




const ArticleAndNews = () => {
  return (
    <>
        <section className="article-and-news">
            <div className="container">
                <div className="center-content">
                    <div className="section-title">
                        <p>Article and News</p>
                        <h2>Get Every Single Articles & News</h2>
                    </div>
                    <button className="btn-transparent">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
                <div className="business">
                    <a className="business-col" href="NotFound">
                        <div className="calender-box">
                            <h4>25<span>Mar</span></h4>
                        </div>
                        <img src={articleImage1} alt="picture of happy woman sitting in the office" />
                        <p>Business</p>
                        <h3>How To Use Digitalization <span>In The Classroom </span></h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </a>
                    <a className="business-col" href="NotFound">
                        <div className="calender-box">
                            <h4>17<span>Mar</span></h4>
                        </div>
                        <img src={articleImage2} alt="columns of advices shown on a computer screen" />
                        <p>Business</p>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>    
                    </a>
                    <a className="business-col" href="NotFound">
                        <div className="calender-box">
                            <h4>13<span>Mar</span></h4>
                        </div>
                        <img src={articleImage3} alt="stack of books with an iphone on top" />
                        <p>Business</p>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p> 
                    </a>
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

export default ArticleAndNews