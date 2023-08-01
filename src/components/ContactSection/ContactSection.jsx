import React from 'react';
import './contactSection.css';
import AsideContactInfo from './AsideContactInfo';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

function ContactSection() {
  return (
    <div className="contactSection__main-container">
      <h2 className="contact-title">Get In Touch</h2>

      <div className="contactSection__box">
        <ContactForm />
        <AsideContactInfo />
        <LocationMap />
      </div>

    </div>
  );
}

export default ContactSection;
