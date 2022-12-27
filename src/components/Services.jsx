import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from "../assets/ad.png";
import img2 from "../assets/brand.jpg";
import img3 from "../assets/digital.png";
import img4 from "../assets/pic1.png";
import img5 from "../assets/seo.png";
import img6 from "../assets/web.png";
import img7 from "../assets/logo.jpg";


const Services = () => {
  return (
    <div className='services'>
      
      <h2>Our Services</h2>

      <div className="carousel">
      <Carousel
        infiniteLoop autoPlay showStatus={false}  showIndicators={false} showArrows={false}
      >
        <div className='carouselBox'>
          <img src={img1} alt="ad" />
          <p className='legend'>Advertising</p>
        </div>
        <div className='carouselBox'>
          <img src={img2} alt="brand" />
          <p className='legend'>Branding</p>
        </div>
        <div className='carouselBox'>
          <img src={img3} alt="digital" />
          <p className='legend'>Digital Advertising</p>
        </div>
        <div className='carouselBox'>
          <img src={img4} alt="advert" />
          <p className='legend'>Advertisment</p>
        </div>
        <div className='carouselBox'>
          <img src={img5} alt="seo" />
          <p className='legend'>SEO optimising</p>
        </div>
        <div className='carouselBox'>
          <img src={img6} alt="web" />
          <p className='legend'>Web Development</p>
        </div>
        <div className='carouselBox'>
          <img src={img7} alt="logo" />
          <p className='legend'>Logo</p>
        </div>
      </Carousel>
      </div>

    </div>
  )
}

export default Services