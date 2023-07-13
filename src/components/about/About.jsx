import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFileEarmarkMusic} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
           <div className="about_me-image">
            <img src={ME} alt="About Image" />
           </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Learn</h5>
                <small>I like to learn new things every day</small>
            </article>
            <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Socialize</h5>
                <small>I love sharing knowledge</small>
            </article>
            <article className='about_card'>
                <BsFileEarmarkMusic className='about_icon'/>
                <h5>Music</h5>
                <small>I love to compose songs</small>
            </article>
          </div>

        <p>
        I'm a passionate technology explorer and a creator of innovative software solutions and lightning-fast hacks that will leave you in awe. Currently, I'm studying Software Engineering at the prestigious Universidad Técnica de Ambato, where I seek to fuel my thirst for knowledge and achieve professional greatness. I'm always immersed in new topics and challenges to keep growing and pushing my limits in this thrilling career. My aim is to be the best and become a true expert.
        </p>
        <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About