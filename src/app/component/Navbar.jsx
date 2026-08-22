
'use client';

import React, { useState } from 'react';
import '../componentStyle/Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // EK HI JAGAH LINKS
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/play-area', label: 'Play Area' },
    { href: '/birthdays', label: 'Birthdays' },
    { href: '/faqs', label: 'FAQs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className='custom-navbar-bg'>
      <div className="container-fluid custom-width">
        <div className="d-flex justify-content-between align-items-center">
          {/* LOGO */}
          <div>
            <img 
              className="img-fluid custom-logo" 
              src="/assets/img/logo.jpeg" 
              alt="logo" 
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="desktop-menu">
            <ul className="d-flex gap-5 m-0 p-0">
              {links.map((item) => (
                <li key={item.href} className="list-style-none">
                  <Link 
                    href={item.href} 
                    className="text-decoration-none  fs-14 text-uppercase fw-bold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <ul className="d-flex gap-3 m-0">
              <li className="list-style-none">
                <Link className="text-decoration-none text-dark fs-18" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
              <li className="list-style-none">
                <Link className="text-decoration-none text-dark fs-18" href="#">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
            </ul>
          </div>
 
          <div className="hamburger-wrapper" onClick={toggleMenu}>
            {!isMenuOpen ? ( 
              <div className="hamburger">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            ) : ( 
              <div className="close-icon">
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
 
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-links">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </div>
        </div>
        

        {/* OVERLAY */}
        {isMenuOpen && (
          <div className="overlay" onClick={toggleMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

















 