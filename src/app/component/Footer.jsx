"use client";

import React from "react";
import '../componentStyle/Footer.css'

const CONTACT = {
  title: "Contact Us",

  address: [
    "Playzio, 2, Shivraj Nagar Rd,",
    "Near Sportify Club, Kalewadi Phata,",
    "Rahatani, Maharashtra - 411017",
  ],

  phone: "+91 73878 30948",

  hours: [
    { days: "Monday to Thursday", time: "11:30 am to 8:30 pm" },
    { days: "Friday to Sunday", time: "11:00 am to 9:00 pm" },
  ],

  mapEmbedSrc:
    "https://www.google.com/maps?q=Playzio,+2,+Shivraj+Nagar+Rd,+near+Sportify+Club,+Kalewadi+Phata,+Rahatani,+Maharashtra+411017&output=embed",
};
export default function Footer() {
  return (
    <footer
      className="w-100"
      style={{ backgroundColor: "white", fontFamily: "'Baloo 2', sans-serif" }}
    >
      <div className="container-fluid custom-width py-5"  >
        <div className="row align-items-center gy-5 gx-md-5">

          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <h2
              className="fw-bold mb-4"
              style={{ color: "#2b2f9e", fontSize: "42px", lineHeight: 1 }}
            >
              {CONTACT.title}
            </h2>

            <div className="mb-4">
              <h3
                className="fw-bold mb-1"
                style={{ color: "#2b2f9e", fontSize: "17px" }}
              >
                Address:
              </h3>
              {CONTACT.address.map((line, i) => (
                <p
                  key={i}
                  className="fw-semibold mb-0"
                  style={{ fontSize: "16px", lineHeight: 1.3, color: "#1a1a1a" }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mb-4">
              <h3
                className="fw-bold mb-1"
                style={{ color: "#2b2f9e", fontSize: "17px" }}
              >
                Phone Number:
              </h3>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                className="fw-semibold text-decoration-none"
                style={{ fontSize: "16px", color: "#1a1a1a" }}
              >
                {CONTACT.phone}
              </a>
            </div>

            <div>
              <h3
                className="fw-bold mb-1"
                style={{ color: "#2b2f9e", fontSize: "17px" }}
              >
                Opening Hours:
              </h3>
              {CONTACT.hours.map((h, i) => (
                <p
                  key={i}
                  className="fw-semibold mb-0"
                  style={{ fontSize: "16px", lineHeight: 1.3, color: "#1a1a1a" }}
                >
                  {h.days} - {h.time}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div
              className="w-100 overflow-hidden rounded shadow offsest-2"
              style={{ height: "340px", }}
            >
              <iframe
                src={CONTACT.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Playzio location"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
