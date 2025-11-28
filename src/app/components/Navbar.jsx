'use client';

// React
import { useState, useEffect } from 'react';

// Next
import Link from 'next/link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. New State to track which submenu is active (using an ID or Name)
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // 2. Logic to toggle specific submenus
  const handleSubMenuToggle = (index) => {
    if (activeMobileSubMenu === index) {
      setActiveMobileSubMenu(null); // Close if already open
    } else {
      setActiveMobileSubMenu(index); // Open the clicked one
    }
  };

  // Handle Body Scroll Lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-visible');
    } else {
      document.body.classList.remove('mobile-menu-visible');
    }
    return () => {
      document.body.classList.remove('mobile-menu-visible');
    };
  }, [isMobileMenuOpen]);

  const socialLinks = [
    { icon: faFacebookF, url: '#' },
    { icon: faTwitter, url: '#' },
    { icon: faInstagram, url: '#' },
    { icon: faLinkedinIn, url: '#' },
    { icon: faYoutube, url: '#' },
  ];

  return (
    <header id="home">
      <div id="sticky-header" className="tg-header__area transparent-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo/clonde-white-logo.svg" alt="Logo" />
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li>
                        <Link href="/" className="section-link">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/features" className="section-link">
                          Features
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/#token" className="section-link">
                          Token
                        </Link>
                      </li> */}
                      <li>
                        <Link href="/how-it-works" className="section-link">
                          How it works
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="/#roadmap" className="section-link">
                          Roadmap
                        </Link>
                      </li> */}
                      {/* <li className="menu-item-has-children">
                        <Link href="/blog">Blog</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">Our Blog</Link>
                          </li>
                          <li>
                            <Link href="/blog/details">Blog Details</Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <Link href="#!" className="tg-btn">
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                    <i className="tg-flaticon-menu-1"></i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`tgmobile__menu ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={toggleMobileMenu}>
            <i className="tg-flaticon-close-1"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo/logo.svg" alt="Logo" />
            </Link>
          </div>

          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li onClick={toggleMobileMenu}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={toggleMobileMenu}>
                <Link href="/features">Features</Link>
              </li>
              {/* <li onClick={toggleMobileMenu}>
                <Link href="/#token">Token</Link>
              </li>{' '} */}
              <li onClick={toggleMobileMenu}>
                <Link href="/how-it-works">How it works</Link>
              </li>
              {/* <li onClick={toggleMobileMenu}>
                <Link href="/#roadmap">Roadmap</Link>
              </li>
              <li className="menu-item-has-children"> */}
              {/* Link navigates and closes menu */}
              {/* <Link href="/blog" onClick={toggleMobileMenu}>
                  Blog
                </Link> */}

              {/* Submenu: Display is toggled via State, not jQuery */}
              {/* <ul className="sub-menu" style={{ display: activeMobileSubMenu === 1 ? 'block' : 'none' }}>
                  <li onClick={toggleMobileMenu}>
                    <Link href="/blog">Our Blog</Link>
                  </li>
                  <li onClick={toggleMobileMenu}>
                    <Link href="/blog/details">Blog Details</Link>
                  </li>
                </ul> */}

              {/* Dropdown Button: Only toggles the submenu, does NOT navigate */}
              {/* <div
                  className={`dropdown-btn ${activeMobileSubMenu === 1 ? 'open' : ''}`}
                  onClick={() => handleSubMenuToggle(1)}
                >
                  <span className="plus-line"></span>
                </div> */}
              {/* </li> */}
            </ul>
          </div>

          <div className="social-links">
            <ul className="list-wrap">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <Link href={social.url}>
                    <FontAwesomeIcon icon={social.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && <div className="tgmobile__menu-backdrop" onClick={toggleMobileMenu}></div>}
    </header>
  );
}
