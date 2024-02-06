'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/carousel image 1.jpg';
import image2 from '../assets/carousel image 2.png';
import image3 from '../assets/carousel image 3.jpg';
import image4 from '../assets/carousel image 4.jpg';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

function Location() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="location">
      <h1>
        Clinically at <span>San Diego, US</span>
      </h1>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="location-card">
            <Image src={image1} alt="carousel image 1" />
            <h2>Downtown San Diego</h2>
            <div className="location-p-container">
              <p>2715 Ash Dr, San Jose, San Diego...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image2} alt="carousel image 2" />
            <h2>Sacramento City</h2>
            <div className="location-p-container">
              <p>4140 Parker Rd, Allentown, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image3} alt="carousel image 3" />
            <h2>Citrus Height</h2>
            <div className="location-p-container">
              <p>8502 Preston Rd, Inglewood, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image4} alt="carousel image 4" />
            <h2>Santa Clara</h2>
            <div className="location-p-container">
              <p>8502 Preston Rd, Inglewood, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image1} alt="carousel image 1" />
            <h2>Downtown San Diego</h2>
            <div className="location-p-container">
              <p>2715 Ash Dr, San Jose, San Diego...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image2} alt="carousel image 2" />
            <h2>Sacramento City</h2>
            <div className="location-p-container">
              <p>4140 Parker Rd, Allentown, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image3} alt="carousel image 3" />
            <h2>Citrus Height</h2>
            <div className="location-p-container">
              <p>8502 Preston Rd, Inglewood, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
          <div className="location-card">
            <Image src={image4} alt="carousel image 4" />
            <h2>Santa Clara</h2>
            <div className="location-p-container">
              <p>8502 Preston Rd, Inglewood, Sacr...</p>
              <FiArrowRight style={{ fontSize: '24px', color: '262F56' }} />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Location;
