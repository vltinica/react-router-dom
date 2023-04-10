import React from 'react'
import "./TestimonialStyles.css"
import { FaDatabase } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div  className='testimonial'>
      <div className="container">
        <div className="outline">
          <div className="content">
            <i><FaDatabase/>Stax</i>
            <p className='body'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Voluptas in adipisci similique a dignissimos! 
              Nulla quas officia hic porro. Commodi inventore quaerat reprehenderit similique.
            </p>
            <div className="name">
              <p>Marie Chilvers</p>
              <p>CEO, Stax</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials