import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../assets/logo2.png";
import img2 from "../assets/logo3.png";
import img3 from "../assets/logo4.png";
import img4 from "../assets/logo5.png";
import img5 from "../assets/inbay.jpg";






const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <video autoPlay loop muted >
          <source src='./vid2.mp4' type='video/mp4' />
        </video>
        <motion.main
          animate={{ x: [35,-35,35] }}
          
          transition={{ repeat: Infinity, duration: 15, }}>
          <h1>AdLabPro</h1>
          <p>The Professional Advertising Laboratory</p>
        </motion.main>
        <div>
          <motion.h1
            animate={{ x: [-80,80,-80] }}
            transition={{ repeat: Infinity, duration: 12, }}>
            Dream Big !
          </motion.h1>
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity }}>and</motion.h1>
          <motion.h1 animate={{ x: [-20,20,-20] }}
            transition={{ repeat: Infinity, duration: 12, }}>
            We will make it BIGGER!!
          </motion.h1>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            We at AdLabPro help businesses to establish their Brand and extend their reach by generating verified leads and traffic.Experts at our agency gives special attention to each client and help them design the marketing strategies.
            <br/>At AdLabPro, we don’t just generate leads, we partner with marketing teams to close the sale. We make sure each and every lead is followed through the funnel and into your ROI. And metrics? We set the bar high. In fact, we’re our biggest critic in that department. So when we’re happy, we know you will be, too.
          </p>
        </div>
      </div>
      <div className="home4" id="clients">
        <div>
          <h1>Clients</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <img src={img1} alt="img"  />
              
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <img src={img2} alt="img"  />
              
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
                            <img src={img3} alt="img"  />
              
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <img src={img4} alt="img"  />
          
            </div>
            <div
              style={{
                animationDelay: "1.3s",
              }}
            >
              <img src={img5} alt="img"  />
          
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home