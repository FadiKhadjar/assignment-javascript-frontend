import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Partners from '../components/Partners'
import Features from '../components/Features'
import AboutCompany from '../components/AboutCompany'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectAndCase from '../components/ProjectAndCase'
import MeetOurTeam from '../components/MeetOutTeam'
import Testimonial from '../components/Testimonial'
import ArticleAndNews from '../components/ArticleAndNews'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'



const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Partners />
      <Features />
      <AboutCompany />
      <OurServices />
      <WhyChooseUs />
      <ProjectAndCase />
      <MeetOurTeam />
      <Testimonial />
      <ArticleAndNews />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default Home