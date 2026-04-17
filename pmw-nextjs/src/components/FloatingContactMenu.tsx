"use client";

import React, { useState } from 'react';
import './FloatingContactMenu.css';

const FloatingContactMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sticky-elements-container ${isOpen ? 'is-open' : 'is-closed'}`}>
      {/* Minimize Arrow Tab */}
      <div className="sticky-item minimize-tab" onClick={() => setIsOpen(!isOpen)}>
        <div className="sticky-btn minimize-btn" style={{ backgroundColor: '#000000' }}>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{isOpen ? '→' : '←'}</span>
        </div>
      </div>

      <div className="sticky-items-wrapper">
        {/* Enquire Now Tab */}

      <div className="sticky-item enquire-tab">
        <div className="sticky-btn" style={{ backgroundColor: '#26D367', color: '#FFFFFF' }}>
          <i className="far fa-envelope"></i>
          <span className="vertical-text">Enquire Now</span>
        </div>
        
        {/* Form Panel */}
        <div className="sticky-form-panel">
          <div className="form-heading">
            Write us!, Let's Talk!
          </div>
          <form className="sticky-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name*" required />
            <input type="tel" placeholder="Phone*" required />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message*" rows={4} required></textarea>
            <button type="submit" className="sticky-submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <a href="https://web.whatsapp.com/send?phone=+910000000000" target="_blank" rel="noopener noreferrer" className="sticky-item icon-item">
        <div className="sticky-btn icon-only" style={{ backgroundColor: '#26D367' }}>
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="sticky-hover-text" style={{ backgroundColor: '#26D367' }}>
          WhatsApp
        </div>
      </a>

      {/* Phone/Contact Icon */}
      <a href="tel:+910000000000" className="sticky-item icon-item">
        <div className="sticky-btn icon-only" style={{ backgroundColor: '#26D367' }}>
          <i className="fa fa-phone"></i>
        </div>
        <div className="sticky-hover-text" style={{ backgroundColor: '#26D367' }}>
          Phone
        </div>
      </a>
      </div>
    </div>
  );
};

export default FloatingContactMenu;
