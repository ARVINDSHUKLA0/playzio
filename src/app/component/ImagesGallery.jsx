"use client";

import React, { useState } from "react";
import LightGallery from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "../componentStyle/ImagesGallery.css";

const images = [
  { src: "/assets/img/svg-1.png", alt: "Playzio Kids Play Area" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Indoor Playground" },
  { src: "/assets/img/svg-1.png", alt: "Kids Playing at Playzio" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Activities" },
  { src: "/assets/img/svg-2.png", alt: "Playzio Fun Activities" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
  { src: "/assets/img/svg-1.png", alt: "Playzio Family Fun" },
];

const ImagesGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 12;

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;

  const currentImages = images.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  const changePage = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-5">
      <div>

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
            📸 Playzio Moments
          </span>

          <h2 className="banner-title mt-3 mb-2">
            Explore Our <span>Gallery</span>
          </h2>

          <p className="text-secondary mb-0">
            Fun, laughter and happy memories at Playzio!
          </p>

        </div>

        {/* Gallery */}
        <LightGallery
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          elementClassNames="row g-3"
        >
          {currentImages.map((image, index) => (
            <a
              href={image.src}
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 gallery-item"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid w-100 rounded-4"
              />

              <div className="gallery-overlay">
                <i className="fa-solid fa-expand"></i>
              </div>
            </a>
          ))}
        </LightGallery>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center mb-0">

              {/* Previous */}
              <li
                className={`page-item ${
                  currentPage === 1 ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link rounded-start-pill"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
              </li>

              {/* Pages */}
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => changePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              {/* Next */}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link rounded-end-pill"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </li>

            </ul>
          </nav>
        )}

      </div>
    </section>
  );
};

export default ImagesGallery;