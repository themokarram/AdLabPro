import React from 'react'
import { AiFillFacebook,AiFillInstagram,AiFillLinkedin,AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>AdLabPro</h1>
        <p>All rights are reserved!</p>
      </div>
      <div>
        <h3>Made with <AiFillHeart style={{color:'red'}}/></h3>
        <p>By MOKARRAM</p>
      </div>
      <div>
        <h2>Follow us</h2>
        <div className='links'>
          <a href="https://www.facebook.com/adlab.pro.9/" target={"blank"}><AiFillFacebook/> Facebook</a>
          <a href="https://www.instagram.com/proadlab/" target={"blank"}><AiFillInstagram/> Instagram</a>
          <a href="https://www.linkedin.com/in/adlabpro-digital-marketing-ad-agency-ba665a212/?originalSubdomain=in" target={"blank"}><AiFillLinkedin/> Linkedin</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer