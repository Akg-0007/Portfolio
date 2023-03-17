import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall,FaPhoneAlt,FaMailBulk} from "react-icons/fa";


const Contact = () => {
  return (
    <div>
      <div className="title">
        <div className="title-behind">CONTACT</div>
        <div className="title-front">Get in Touch</div>
      </div>

      <div className="iscontact">
        <div className="contact-left">
          <h2 className="follow">ADDRESSS</h2>
          <p>223 Near ESSAR Petrol Pump
            <br></br>
          Shiv puram , Roorkee
          <br></br>
          U.K India</p>
          <p className="tel"> <FaPhoneAlt className="telp"/> (+91) 999 786 9456</p>
          <p className="tel"> <FaPhoneAlt className="telp"/> (+91) 999 786 9456</p>
          <p className="tel"> <FaMailBulk className="telp"/> Akash.gupta@vp.com</p>
          <h2 className="follow">FOLLOW ME</h2>
          <div class="nav-icon">
            <FaFacebook className="icon1" />
            <FaLinkedinIn className="icon1" />
            <FaGithub className="icon1" />
            <FaVolleyballBall className="icon1" />
          </div>
        </div>
        <div className="contact-right">
          <h2 className="follow">SEND US A NOTE</h2>
          <div className="contact-right-input">
          <input className="cri" type="text" placeholder="  Name" />
          <input className="cri" type="email" placeholder="Email" />
          </div>
          <textarea className="txtar" name="sdsf" placeholder="  Enter the text here" id="" cols="30" rows="10"></textarea>
          <button className="btn btn-pri conk">Send Message</button>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
