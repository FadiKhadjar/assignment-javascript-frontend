import React from 'react';
import logotype from '../assets/images/logotype-footer.svg';
import lines from '../assets/images/background-wavy-lines-footer.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <img className="wavy-lines-footer" src={lines}/>
        <div className="container">
            <div className="logotype">
                <a href="/"><img src={logotype} alt="crito"/></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="row">
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="NotFound">About</a></li>
                        <li><a href="NotFound">Features</a></li>
                        <li><a href="NotFound">Works</a></li>
                        <li><a href="NotFound">Career</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="NotFound">Customer Support</a></li>
                        <li><a href="NotFound">Dilivery Details</a></li>
                        <li><a href="NotFound">Terms & Conditions</a></li>
                        <li><a href="NotFound">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="NotFound">Free eBooks</a></li>
                        <li><a href="NotFound">Development Tutorial</a></li>
                        <li><a href="NotFound"> How to - Blog</a></li>
                        <li><a href="NotFound">Youtube Playlist</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Link</h4>
                    <ul>
                        <li><a href="NotFound">Free eBooks</a></li>
                        <li><a href="NotFound">Development Tutorial</a></li>
                        <li><a href="NotFound">How to - Blog</a></li>
                        <li><a href="NotFound">Youtube Playlist</a></li>
                    </ul>
                </div>
            </div>
        </div>     
        <div className="footer-end">
            <div className="container">
                <p>&copy;2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
                <div className="socialmedia-bar">
                    <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/X" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer