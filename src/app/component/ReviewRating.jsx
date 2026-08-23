"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../componentStyle/ReviewRating.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Happy Parent",
    rating: 5,
    review:
      "Amazing place for kids! My child had a wonderful time playing and learning. The staff is very friendly and helpful.",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Priya Verma",
    role: "Happy Parent",
    rating: 5,
    review:
      "A perfect place for kids to enjoy. Everything was clean, safe and beautifully managed. Highly recommended!",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Amit Gupta",
    role: "Happy Parent",
    rating: 4,
    review:
      "Great experience! Kids really enjoyed the activities. We will definitely visit again with our family.",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "Neha Singh",
    role: "Happy Parent",
    rating: 5,
    review:
      "Loved the atmosphere and activities. My little one enjoyed every moment. Such a fun and safe environment.",
    image: "https://i.pravatar.cc/100?img=47",
  },
];

const ReviewRating = () => {
  // Manual responsive detection — slick's own "responsive" breakpoint
  // array is unreliable on real mobile devices in production builds.
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [arrows, setArrows] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setSlidesToShow(1);
        setArrows(false);
      } else if (width <= 991) {
        setSlidesToShow(2);
        setArrows(true);
      } else {
        setSlidesToShow(3);
        setArrows(true);
      }
    };

    updateSlider();
    setMounted(true);

    window.addEventListener("resize", updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows,
  };

  return (
    <section className="review-section py-5">
      <div className="container">

        <div className="text-center review-heading mb-5">
          <h2 className="banner-title m-0 ">
            What Parents <span>Say About Us</span>
          </h2>

          <p>
            Our little visitors and their parents make every day special!
          </p>
        </div>

        {mounted && (
          <Slider key={`slider-${slidesToShow}`} {...settings}>
            {reviews.map((item, index) => (
              <div className="review-slide" key={index}>
                <div className="review-card">

                  <div className="quote-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>

                  <div className="review-stars mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={
                          star <= item.rating
                            ? "fa-solid fa-star"
                            : "fa-regular fa-star"
                        }
                      />
                    ))}
                  </div>

                  <p className="review-text">
                    “{item.review}”
                  </p>

                  <div className="review-user d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="review-avatar"
                    />

                    <div className="ms-3">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        )}

        <div className="overall-rating text-center mt-5">
          <div className="rating-number">
            4.9 <span>/ 5</span>
          </div>

          <div className="big-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <p>Based on 500+ happy families</p>
        </div>

      </div>
    </section>
  );
};

export default ReviewRating;
