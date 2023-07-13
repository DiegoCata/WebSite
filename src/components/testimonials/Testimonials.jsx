import React from 'react'
import './testimonials.css'
import CER1 from '../../assets/certificate1.png'
import CER2 from '../../assets/certificate2.png'

// import Swiper core and required modules
import { Pagination,} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data=[
  {
    avatar: CER1,
    name: 'Frontend developer course',
    review: 'Lorem ipsum dolor sit amet.'
  },
  {
    avatar: CER2,
    name: 'Mobile app developer course',
    review: 'Lorem ipsum dolor sit amet.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Learning is Always Good</h5>
      <h2>Certificates</h2>

      <Swiper className="container testimonials_container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        { 
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonials">
                <div className="client_avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client_name'>{name}</h5>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials