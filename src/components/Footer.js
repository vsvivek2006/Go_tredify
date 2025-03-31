import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 shadow-sm">
      <div className="container text-center">
        
        {/* Copyright */}
        <p className="mb-3">© 2025 GO Trendify. All Rights Reserved.</p>
        
        {/* Quick Links */}
        <div className="mb-3">
          <a href="/" className="text-white mx-2">Home</a> |
          <a href="/about" className="text-white mx-2">About</a> |
          <a href="/services" className="text-white mx-2">Services</a> |
          <a href="/blog" className="text-white mx-2">Blog</a> |
          <a href="/contact" className="text-white mx-2">Contact</a>
        </div>
        
        {/* Social Media Links */}
        <div>
          <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://youtube.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} />
          </a>
          <a href="https://github.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
