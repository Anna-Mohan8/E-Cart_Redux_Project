import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt,FaInstagram,FaFacebook,FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
     <footer className="bg-primary text-white pt-3 m-3 justify-content-between">
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <h5>DailyCart</h5>
            <p>Online Shopping Website</p>
          </div>

          <div className="col-md-2">
            <h6>Links</h6>
            <p>Home</p>
            <p>Wishlist</p>
            <p>Cart</p>
          </div>

          <div className="col-md-2">
            <h6>Guides</h6>
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootstrap</p>
           
          </div>

          <div className="col-md-2">
            <h6>Contact Us</h6>
            <div className="d-flex align-items-center">
        <input className="form-control" placeholder="Email Here" />
              <div className="d-flex gap-3">
              <span><FaPhoneAlt /></span>
              <span><FaInstagram /></span>
              <span><FaFacebook /></span>
              <span><FaWhatsapp /></span>
              <span><MdEmail /></span>
             
            </div>

        

    
    
     </div>
          </div>

        </div>
         <p className="text-center mt-2">Copyright © DailyCart</p>
      
      </div>
    </footer>
  )
}

export default Footer
