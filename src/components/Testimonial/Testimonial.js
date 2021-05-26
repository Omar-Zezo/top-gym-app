import { Swiper, SwiperSlide } from 'swiper/react';
import React, {Component} from 'react'
import testOne from '../../imgs/02.jpg'
import testTwo from '../../imgs/03.jpg'
import testFour from '../../imgs/06.jpg'
import testFive from '../../imgs/07.jpg'

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"



// Import Swiper and modules
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';

// Install modules
SwiperCore.use([Autoplay,Navigation, Pagination, Scrollbar]);

class Testimonials extends Component{
render(){
  return (
      <div className="testiminiol">
        <h6>our tistimonial</h6>
        <h2>what clients say</h2>
        <Swiper 
        spaceBetween={1}
        slidesPerView= {2}
        pagination={{clickable:true}}
        autoplay={{"delay": 1000,"disableOnInteraction": false}}
        loop={true}
        breakpoints={{
            "0": {
                "slidesPerView": 1,
            },
            "768": {
                "slidesPerView": 2,
            }
        }}     
        >
        <SwiperSlide>
            <div className="opinion"></div>
            <div className="opinion-info">
                <h3>Sergi Constanse</h3>
                <h5>Client</h5>
                <p>
                document or a typeface without relying on meaningful content. Lorem ipsum
                </p>
                <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div className="testImg">
            <img src={testOne} alt="testOne" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="opinion"></div>
            <div className="opinion-info">
                <h3>Jeff Seid</h3>
                <h5>Client</h5>
                <p>
                document or a typeface without relying on meaningful content. Lorem ipsum
                </p>
                <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div className="testImg">
            <img src={testTwo} alt="testOne" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="opinion"></div>
            <div className="opinion-info">
                <h3>Jeff Seid</h3>
                <h5>Client</h5>
                <p>
                document or a typeface without relying on meaningful content. Lorem ipsum
                </p>
                <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div className="testImg">
            <img src={testFive} alt="testOne" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="opinion"></div>
            <div className="opinion-info">
                <h3>Jeff Seid</h3>
                <h5>Client</h5>
                <p>
                document or a typeface without relying on meaningful content. Lorem ipsum
                </p>
                <span className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div className="testImg">
            <img src={testFour} alt="testOne" />
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  );
}
}

export default Testimonials;