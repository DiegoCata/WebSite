import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { PiMessengerLogoBold } from 'react-icons/pi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7oghdm2', 'template_ec0w9oh', form.current, 'sy8aImKKYdFqmM5gU')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>difercata26@gmail.com</h5>
            <a href="mailto:difercata26@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <PiMessengerLogoBold className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Diego Cata</h5>
            <a href="https://m.me/diego.fernando.3572" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+593 992788534</h5>
            <a href="https://api.whatsapp.com/send?phone=593992788534" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact