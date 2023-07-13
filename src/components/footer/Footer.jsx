import React from 'react'
import './footer.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>DIEGODEV</a>
      <ul className='permainks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://www.facebook.com/diego.fernando.3572"><BiLogoFacebook /></a>
        <a href="https://www.instagram.com/fernando_cata26/"><BsInstagram /></a>
        <a href="https://github.com/DiegoCata"><FiGithub /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy;DiegoDev All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer