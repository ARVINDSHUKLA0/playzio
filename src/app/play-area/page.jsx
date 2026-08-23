import React from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ImagesGallery from "../component/ImagesGallery";

const Page = () => {
  const packages = [
    {
      title: "Magic Mint",
      duration: "3 Months",
      price: "₹3,000",
      icon: "🌿",
      color: "success",
      benefits: [
        "6 Entries (1 hour each)",
        "Priority bookings for events & workshops",
        "10% discount on workshops & events",
      ],
    },
    {
      title: "Sun Shine",
      duration: "3 Months",
      price: "₹4,000",
      icon: "☀️",
      color: "warning",
      popular: true,
      benefits: [
        "10 Entries (Unlimited time)",
        "10% discount on workshops & events",
        "5% off on café bill",
      ],
    },
    {
      title: "Blush Buddy",
      duration: "3 Months",
      price: "₹5,500",
      icon: "🌸",
      color: "danger",
      benefits: [
        "Unlimited Entries",
        "10% off on café bill",
        "Adult entry free",
        "1+1 entry",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="py-5 bg-light">
        <div className="container custom-width">
          <div className="row align-items-center g-4">

            {/* Images */}
            <div className="col-lg-6">
              <div className="row g-2">
                <div className="col-7">
                  <Image
                    src="/assets/img/banner1.png"
                    width={600}
                    height={500}
                    className="img-fluid w-100 h-100 object-fit-cover rounded-4"
                    alt="Playzio play area"
                  />
                </div>

                <div className="col-5 pt-5">
                  <Image
                    src="/assets/img/banner2.png"
                    width={400}
                    height={400}
                    className="img-fluid w-100 rounded-4"
                    alt="Kids playing at Playzio"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-lg-6">
              <h2 className="banner-title">
                Your Child's <span style={{ color: "#FD6F26" }}>Next Adventure!</span>
              </h2>

              <p className="text-secondary lh-lg">
                Get ready for a day filled with fun, laughter, learning and
                adventure! At Playzio, every visit creates a new happy memory.
              </p>

              <div className="row g-3 my-4">
                <div className="col-sm-6">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-child-reaching text-warning fs-4"></i>
                    <div>
                      <strong className="d-block">Fun Playtime</strong>
                      <small className="text-secondary">
                        Exciting activities
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-shield-heart text-success fs-4"></i>
                    <div>
                      <strong className="d-block">Safe & Clean</strong>
                      <small className="text-secondary">
                        Safe for every child
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-ticket text-primary fs-4"></i>
                    <div>
                      <strong className="d-block">Flexible Rates</strong>
                      <small className="text-secondary">
                        Choose your playtime
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa-solid fa-gift text-danger fs-4"></i>
                    <div>
                      <strong className="d-block">Special Offers</strong>
                      <small className="text-secondary">
                        Benefits for families
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#pricing"
                style={{ backgroundColor: "#FD6F26" }}
                className="rounded-pill text-white px-4 text-decoration-none py-2 btn-Workshops"
              >
                View Pricing
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>

          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container custom-width">

          <div className="text-center mb-5">
            <span className="badge rounded-pill bg-danger-subtle text-dark px-3 py-2">
              Playzio Membership
            </span>

            <h1 className="banner-title mt-3 mb-2 ">
              Choose Your <span style={{ color: "#FD6F26" }}>Perfect Plan</span>
            </h1>

            <p className="text-secondary mb-0">
              More playtime, more fun and more happy memories!
            </p>
          </div>

          {/* Packages */}
          <div className="row g-4">

            {packages.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>

                <div
                  className={`card h-100 border-0 rounded-5 shadow-sm p-4 text-center
                  ${item.popular ? "border border-warning border-3" : ""}`}
                >

                  {item.popular && (
                    <span className="badge bg-warning text-dark rounded-pill align-self-center mb-2">
                      ⭐ Most Popular
                    </span>
                  )}

                  {/* Icon */}
                  <div className="fs-1 mb-2">
                    {item.icon}
                  </div>

                  <h3 className="fw-bold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-secondary mb-3">
                    {item.duration}
                  </p>

                  {/* Price */}
                  <div className="bg-warning-subtle rounded-pill py-2 px-4 mx-auto mb-4">
                    <h4 className="fw-bold text-dark mb-0">
                      {item.price}
                    </h4>
                  </div>

                  {/* Benefits */}
                  <div className="text-start">

                    {item.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="d-flex gap-2 align-items-start border-bottom py-3"
                      >
                        <i className="fa-solid fa-circle-check text-success mt-1"></i>

                        <span className="text-secondary">
                          {benefit}
                        </span>
                      </div>
                    ))}

                  </div>

                  {/* Button */}
                  <button
                    className={`btn btn-${item.color} rounded-pill mt-auto pt-2 pb-2 mt-4`}
                  >
                    Choose Plan
                    <i className="fa-solid fa-arrow-right ms-2 btn-Workshops"></i>
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* Terms */}
          <div className="mt-5 text-secondary small">
            <h6 className="text-danger fw-bold">
              Terms & Conditions
            </h6>

            <ul>
              <li>Membership card is valid for 1 child only.</li>
              <li>Membership benefits are subject to Playzio terms.</li>
              <li>Membership is non-transferable.</li>
            </ul>
          </div>

        </div>
      </section>
      <section className="container custom-width">
        <ImagesGallery />
      </section>
      <Footer />
    </>
  );
};

export default Page;