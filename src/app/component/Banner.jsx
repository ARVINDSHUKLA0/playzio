'use client';

import React from 'react'
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../componentStyle/Banner.css'

const Banner = () => {

  // YAHA APNI IMAGES DAALNA
  const sliderImages = [
    '/assets/img/banner1.png',
    '/assets/img/banner2.png',
    '/assets/img/banner1.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <>
      <section className='banner-warper'>
        <div className='container custom-width'>
          <div className='row align-items-center'>

            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
              <span className='banner-eyebrow'>🎈 Indoor Play &amp; Birthday Zone</span>

              <h1 className='banner-title'>
                Where every playdate <span className='banner-highlight'>becomes a party</span>
              </h1>

              <p className='banner-sub'>
                Slides, ball pits, dress-up corners aur full birthday setup — sab ek hi jagah.
                Aapke bache ki agli favourite memory yahi banegi.
              </p>

              <div className='banner-btn-group'>
                <Link href='/play-area' className='btn-pz btn-pz-primary'>
                  Explore Play Area
                  <span className='btn-arrow'>→</span>
                </Link>
                <Link href='/birthdays' className='btn-pz btn-pz-secondary'>
                  Birthday Packages
                </Link>
              </div>
            </div>

            <div className='offset-lg-1 col-lg-5 col-md-6 col-sm-12 col-12'>
              <div className='banner-visual-wrap'>
                <div className='blob-shape blob-yellow'></div>
                <div className='blob-shape blob-blue'></div>

                <div className='banner-frame'>
                  <Slider {...sliderSettings}>
                    {sliderImages.map((img, index) => (
                      <div key={index} className='slider-item'>
                        <img className='img-fluid' src={img} alt={`banner-slide-${index}`} />
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className='banner-badge'>
                  <span>🎉</span>
                  <div>
                    <strong>500+</strong>
                    <p>Birthdays hosted</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Banner