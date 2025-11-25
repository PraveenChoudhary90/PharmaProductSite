import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3>PharmaCare</h3>
          <p>
            Providing high-quality healthcare solutions and trusted medical
            products for a healthier world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@pharmacare.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Health Street, NY</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PharmaCare. All rights reserved.</p>
        <p className="regulatory">
          *For medical professionals and educational purposes only. Always consult a licensed physician.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
