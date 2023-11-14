import React from 'react'
import paperz from '../assets/images/logo-paperz.svg'
import dorfus from '../assets/images/logo-dorfus.svg'
import martino from '../assets/images/logo-martino.svg'
import square from '../assets/images/logo-square.svg'
import gobona from '../assets/images/logo-gobona.svg'


const Partners = () => {
  return (
    <>
        <section className="partners">
            <div className="container">
                <a href="NotFound" target="_blank"><img src={paperz} alt="logotype of a company called paperz" /></a>
                <a href="NotFound" target="_blank"><img src={dorfus} alt="logotype of a company called dorfus" /></a>
                <a href="NotFound" target="_blank"><img src={martino} alt="logotype of a company called martino" /></a>
                <a href="NotFound" target="_blank"><img src={square} alt="logotype of a company called square" /></a>
                <a href="NotFound" target="_blank"><img src={gobona} alt="logotype of a company called gobona" /></a>
            </div>
        </section>
    </>
  )
}

export default Partners