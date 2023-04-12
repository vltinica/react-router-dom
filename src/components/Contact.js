import React from 'react'
import "./ContactStyles.css"
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="col-1">
          <div className="content">
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ipsa suscipit necessitatibus perspiciatis vitae esse iure,
                aliquam consequatur ipsam soluta erast.
              </p>
            </div>
            <div className="address">
              <p>686 Terr. du Ruisseau</p>
              <p>Lashine, QC H8T</p>
            </div>
            <div className="icons">
              <FaPhone style={{marginRight:"1rem"}}/>
              <p>+1 (514) 701-9222</p>
            </div>  
            <div className="icons">
              <FaEnvelope style={{marginRight:"1rem"}}/>
              <p>vltinica@gmail.com</p>
            </div>   
            <div className="careers">
              <p>Looking for careers?&nbsp;<span>View all job openings</span></p>
            </div>        
          </div>
        </div>

        <div className="col-2">
          <form action="">
            <input type="text" placeholder='Full name' />
            <input type="email" placeholder='Email' />
            <input type="phone" placeholder='Phone' />
            <textarea name="Message" placeholder='Message' cols="30" rows="6"></textarea>
            <div className="checkbox">
              <input type="checkbox" />
              <p>
                By checking thes box, you agree to the &nbsp;<span>Privacy Policy</span>&nbsp;and&nbsp;
                <span>Cookie Policy</span>.
              </p>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact