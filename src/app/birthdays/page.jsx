import React from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import "./Birthdays.css";
import ImagesGallery from "../component/ImagesGallery";
import Footer from "../component/Footer";

const Page = () => {
    return (
        <>
            <Navbar />

            <section className="birthday-section py-5">
                <div className="container custom-width">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-3 col-md-4">
                            <div className="birthday-img birthday-left">
                                <Image
                                    src="/assets/img/bhirday-imges-1.png"
                                    alt="Playzio Birthday Celebration"
                                    width={500}
                                    height={500}
                                    className="img-fluid rounded-4 shadow"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 text-center">
                            <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 mb-3">
                                🎈 Playzio Birthdays
                            </span>

                            <h1 className="banner-title mb-3">
                                Celebrate <span>With Us!</span>
                            </h1>

                            <p className="fs-5 text-secondary lh-lg mb-3">
                                Throw the ultimate birthday bash at Playzio! Let us take
                                care of the details while you and your little one enjoy
                                every special moment.
                            </p>

                            <p className="text-secondary lh-lg mb-4">
                                Our space is designed to create magical birthday memories
                                with a fun-filled environment perfect for kids aged
                                <strong> 9 months to 9 years.</strong>
                            </p>

                            <a
                                href="#birthday-packages"
                                style={{ backgroundColor: "#FF6A27" }}
                                className="btn  rounded-pill text-white px-4 py-2 fw-semibold btn-Workshops"
                            >
                                Explore Birthday Packages
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="birthday-img birthday-right">
                                <Image
                                    src="/assets/img/bhriday-imges-2.png"
                                    alt="Playzio Birthday Party"
                                    width={500}
                                    height={500}
                                    className="img-fluid rounded-4 shadow"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="container custom-width">
                <ImagesGallery />
            </section>
            <Footer/>
        </>
    );
};

export default Page;