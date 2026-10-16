import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-wrapper" id="colophon">
      <div className="footer-top">
        {/* Brand & Contact Info */}
        <div className="footer-brand">
          <a href="#" aria-label="Veeserve Home">
            <img
              src="/assets/images/veeservelogo.png"
              alt="Veeserve Visa Services"
              width="170"
            />
          </a>

          <div className="footer-contact-item">
            <i className="fa-solid fa-phone" style={{ marginTop: '4px', color: '#BB9572' }}></i>
            <a href="https://wa.me/971509434364?">+971 509434364</a>
          </div>

          <div className="footer-contact-item">
            <i className="fa-solid fa-envelope" style={{ marginTop: '4px', color: '#BB9572' }}></i>
            <a href="mailto:visa@veeserve.ae">visa@veeserve.ae</a>
          </div>

          <div className="footer-contact-item">
            <i className="fa-solid fa-location-dot" style={{ marginTop: '4px', color: '#BB9572' }}></i>
            <span>Rolex tower - 22nd floor - Twin - Deira - Dubai</span>
          </div>
        </div>

        {/* Column 1: Schengen */}
        <div className="footer-col">
          <h6>SCHENGEN</h6>
          <ul>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Germany">Visa to Germany</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Spain">Visa to Spain</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Netherlands">Visa to Netherlands</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Greece">Visa to Greece</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Switzerland">Visa to Switzerland</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Italy">Visa to Italy</a></li>
          </ul>
        </div>

        {/* Column 2: US & UK */}
        <div className="footer-col">
          <h6>US & UK</h6>
          <ul>
            <li><a href="https://wa.me/971509434364?text=Urgent%20USA%20Visa">Urgent USA Visa</a></li>
            <li><a href="https://wa.me/971509434364?text=US%20B1%20B2%20Visa">US B1, B2 Visa</a></li>
            <li><a href="https://wa.me/971509434364?text=US%20Visa%20Renewal">US Visa Renewal</a></li>
            <li><a href="https://wa.me/971509434364?text=US%20Student%20Visa%20F1">US Student Visa F1</a></li>
            <li><a href="https://wa.me/971509434364?text=Urgent%20UK%20Visa">Urgent UK Visa</a></li>
            <li><a href="https://wa.me/971509434364?text=UK%20Visa">UK Visa</a></li>
          </ul>
        </div>

        {/* Column 3: Other Countries */}
        <div className="footer-col">
          <h6>OTHER COUNTRIES</h6>
          <ul>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Japan">Visa to Japan</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20China">Visa to China</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20South%20Korea">Visa to South Korea</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Canada">Visa to Canada</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20South%20Africa">Visa to South Africa</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Australia">Visa to Australia</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Malaysia">Visa to Malaysia</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Singapore">Visa to Singapore</a></li>
            <li><a href="https://wa.me/971509434364?text=Visa%20to%20Thailand">Visa to Thailand</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div className="footer-col">
          <h6>QUICK LINKS</h6>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#countries">Countries</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">Blog</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-copyright">
          Copyright © 2026 veeserve.ae
        </div>

        <div className="footer-socials">
          <a
            href="https://wa.me/971509434364?text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="WhatsApp Veeserve"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://www.instagram.com/veeserve.ae/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="Instagram Veeserve"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
