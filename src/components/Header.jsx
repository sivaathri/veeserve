import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'COUNTRIES', href: '#countries' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'BLOG', href: '#faq' },
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        {/* Left: Frosted Glass Capsule for Logo */}
        <div className="header-logo-pill">
          <a href="#" aria-label="Veeserve Visa Services Home">
            <img
              src="/assets/images/veeservelogo.png"
              alt="Veeserve"
              width="155"
              height="38"
            />
          </a>
        </div>

        {/* Center: Clean Floating Navigation Menu */}
        <nav className="header-nav" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeItem === item.name ? 'active' : ''}
              onClick={() => setActiveItem(item.name)}
            >
              <span className="nav-line"></span>
              <span className="nav-text">{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Right: Golden Pill CTA Button & Mobile Toggle */}
        <div className="header-cta-wrap">
          <a
            href="https://wa.me/971509434364?text=Hi%20Veeserve"
            target="_blank"
            rel="noopener noreferrer"
            className="header-btn"
          >
            Connect Us
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={activeItem === item.name ? 'active' : ''}
              onClick={() => {
                setActiveItem(item.name);
                setMobileMenuOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://wa.me/971509434364?text=Hi%20Veeserve"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Connect Us
          </a>
        </div>
      )}
    </header>
  );
}
