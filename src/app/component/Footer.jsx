"use client";

import React from "react";

/**
 * ContactUs.jsx
 * Pixel-close recreation of the reference design:
 * cream background, bold rounded blue heading, map on the right.
 *
 * IMPORTANT: Add this font import once in your app/layout.js (or globals.css):
 *
 *   import { Baloo_2 } from "next/font/google";
 *   const baloo = Baloo_2({ subsets: ["latin"], weight: ["600","700","800"] });
 *   // then add `className={baloo.className}` on <body>
 *
 * Or via CSS (globals.css):
 *   @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&display=swap');
 */

const CONTACT = {
  title: "Contact Us",
  address: [
    "Bambino, Showroom B, Elite Transbay,",
    "Miracle Glory Rd, Balewadi, Pune,",
    "Maharashtra - 411045",
  ],
  phone: "+91 73878 30948",
  hours: [
    { days: "Monday to Thursday", time: "11:30 am to 8:30 pm" },
    { days: "Friday to Sunday", time: "11:00 am to 9:00 pm" },
  ],
  // Replace with your real "Embed a map" src from Google Maps → Share → Embed a map
  mapEmbedSrc:
    "https://www.google.com/maps?q=Bambino+Balewadi+Pune&output=embed",
};

export default function footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#f2eec6", fontFamily: "'Baloo 2', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl px-8 py-16 md:px-14">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          {/* Left: Contact details */}
          <div>
            <h2
              className="mb-8 text-[42px] font-extrabold leading-none"
              style={{ color: "#2b2f9e" }}
            >
              {CONTACT.title}
            </h2>

            <div className="mb-7">
              <h3
                className="mb-1 text-[17px] font-bold"
                style={{ color: "#2b2f9e" }}
              >
                Address:
              </h3>
              {CONTACT.address.map((line, i) => (
                <p
                  key={i}
                  className="text-[16px] font-semibold leading-snug text-[#1a1a1a]"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="mb-7">
              <h3
                className="mb-1 text-[17px] font-bold"
                style={{ color: "#2b2f9e" }}
              >
                Phone Number:
              </h3>
              <a
                href={`tel:${CONTACT.phone.replace(/\s+/g, "")}`}
                className="text-[16px] font-semibold text-[#1a1a1a] hover:underline"
              >
                {CONTACT.phone}
              </a>
            </div>

            <div>
              <h3
                className="mb-1 text-[17px] font-bold"
                style={{ color: "#2b2f9e" }}
              >
                Opening Hours:
              </h3>
              {CONTACT.hours.map((h, i) => (
                <p
                  key={i}
                  className="text-[16px] font-semibold leading-snug text-[#1a1a1a]"
                >
                  {h.days} - {h.time}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Google Map */}
          <div className="h-[340px] w-full overflow-hidden rounded-lg shadow-lg md:h-[400px]">
            <iframe
              src={CONTACT.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bambino location map"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
