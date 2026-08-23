"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../component/Navbar";
import "./faqs.css";
import Footer from "../component/Footer";

const faqs = [
  {
    question: "What are the timings?",
    answer:
      "Playzio is open throughout the week. Please contact us for the latest opening and closing timings.",
  },
  {
    question: "Is there a place for parents to sit?",
    answer:
      "Yes! Parents can relax comfortably while their children enjoy the play area.",
  },
  {
    question: "Are there activities for all age groups?",
    answer:
      "Yes, Playzio offers fun and engaging activities for children from 9 months to 9 years.",
  },
  {
    question: "Do we need to pre-book?",
    answer:
      "Walk-ins are welcome, but we recommend booking ahead during private events, birthdays or school bookings.",
  },
  {
    question: "How do I book a birthday party?",
    answer:
      "You can contact our Playzio team to discuss birthday packages and availability.",
  },
  {
    question: "Are socks required?",
    answer:
      "Yes, socks are mandatory for both children and adults inside the play area.",
  },
  {
    question: "Can I bring outside food?",
    answer:
      "Please contact our team regarding the outside food policy.",
  },
  {
    question: "Do you offer packages for regular visits?",
    answer:
      "Yes, Playzio offers flexible packages and membership options.",
  },
  {
    question:
      "How can I stay up-to-date on all the exciting things happening at Playzio?",
    answer:
      "Follow Playzio on social media for events, workshops and special offers.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <section className="py-lg-5 py-md-5 py-sm-3">
        <div className="container custom-width">
          <div className="row m-0 align-items-center g-5">

            {/* Images */}
            <div className="col-lg-5">
              <div className="row g-5">
                <div className="col-7">
                  <Image
                    src="/assets/img/faqs-1.png"
                    width={500}
                    height={400}
                    alt="Kids playing at Playzio"
                    className="img-fluid rounded-4 shadow faq-img-1"
                  />
                </div>

                <div className="col-7 ms-auto">
                  <Image
                    src="/assets/img/faqs-2.png"
                    width={500}
                    height={400}
                    alt="Playzio play area"
                    className="img-fluid rounded-4 shadow faq-img-2"
                  />
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="col-lg-7">
              <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
                ❓ Need Help?
              </span>

              <h2 className="banner-title mt-3 mb-2">
                Frequently Asked <span>Questions</span>
              </h2>

              <p className="text-secondary mb-4">
                Everything you need to know about Playzio.
              </p>

              {/* <div>
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      className="border rounded-3 mb-2 overflow-hidden"
                      key={index}
                    > 
                      <button
                        type="button"
                        onClick={() => handleFaq(index)}
                        className={`btn w-100 text-start d-flex justify-content-between align-items-center px-3 py-3 ${
                          isOpen ? "text-danger" : "text-dark"
                        }`}
                      >
                        <span className="fw-semibold">
                          {faq.question}
                        </span>

                        <i
                          className={`fa-solid ${
                            isOpen
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                        ></i>
                      </button>
 
                      {isOpen && (
                        <div className="px-3 pb-3 text-secondary">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div> */}
              <div>
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div className="faq-item mb-2" key={index}>

                      <button
                        type="button"
                        onClick={() => handleFaq(index)}
                        className="faq-question w-100 border-0 bg-white d-flex justify-content-between align-items-center text-start px-3 py-3"
                      >
                        <span className="fw-semibold">
                          {faq.question}
                        </span>

                        <i
                          className={`fa-solid fa-chevron-down faq-arrow ${isOpen ? "rotate" : ""
                            }`}
                        ></i>
                      </button>

                      <div className={`faq-dropdown ${isOpen ? "open" : ""}`}>
                        <div className="faq-content px-3 pb-3 text-secondary">
                          {faq.answer}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;