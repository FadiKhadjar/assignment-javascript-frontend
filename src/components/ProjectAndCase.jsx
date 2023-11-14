import React from 'react'
import articleImage1 from '../assets/images/article-image-1.png'
import articleImage2 from '../assets/images/article-image-2.png'
import articleImage3 from '../assets/images/article-image-3.png'
import articleImage4 from '../assets/images/article-image-4.png'



const ProjectAndCase = () => {
  return (
    <>
        <section className="project-and-case">
            <div className="container">
                <div className="section-title">
                    <p>Project & Case Studies</p>
                    <h2>Let's Looks Our Global Projects</h2>
                </div>
                <div className="project-and-cases">
                    <a className="project" href="#">
                        <img src={articleImage1} alt="A mans hands reading a business paper" />
                        <h3>Grow your business</h3>
                        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={articleImage2} alt="Pink apple products on a desk" />
                        <h3>Why your client needs a responsive website</h3>
                        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={articleImage3} alt="Desk with office supplies" />
                        <h3>Educate your employees to get better results</h3>
                        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                    <a className="project" href="#">
                        <img src={articleImage4} alt="Laptop with Business Intelligence Insights" />
                        <h3>Business Insights is a important piece of your business</h3>
                        <div className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></div>
                    </a>
                </div>
                <div className="center-content">
                    <a className="btn-black" href="projects.html">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProjectAndCase