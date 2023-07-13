import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons//bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>I'm a creative thinker, always coming up with innovative design solutions.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>Understanding user needs is my priority, ensuring that my designs meet their expectations.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>I have a solid grasp of design principles, using typography, color, and hierarchy effectively.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>Usability and user experience are at the forefront of my designs, creating intuitive interfaces.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>I communicate effectively, presenting my ideas and collaborating with teams to achieve successful designs.</p>
            </li>
          </ul>
        </article>
        {/* END UI/UX*/}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>As a web developer, I thrive on building dynamic and interactive web experiences.</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>Solving complex problems and finding efficient solutions is what I excel at in web development.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>I have a deep understanding of coding languages and frameworks, enabling me to create robust and scalable web applications.</p>
            </li><li>
              <BsCheckLg className='service_list-icon'/>
              <p>I continuously learn and adapt to the latest web technologies, staying up-to-date with industry trends and best practices.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>I'm a creative content creator, bringing unique storytelling to life.</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>Crafting compelling narratives and understanding the audience is my expertise.</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>I excel at persuasive and informative copy that resonates with the audience.</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>Collaboration and effective communication drive successful content creation.</p>
            </li>
            <li>
              <BsCheckLg className='service_list-icon'/>
              <p>Collaboration and effective communication drive successful content creation.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
      </div>
    </section>
  )
}

export default Services