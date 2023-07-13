import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/diego-cata-saltos-bb37a3283" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/DiegoCata" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials