import React from "react";
import "../styles/Contact.css";

export default function Contact() {

  return (
    <main className="contact-page-container">

      <section className="contact-header-section">

        <h1 className="contact-header-title">
          Contact
        </h1>

      </section>


      <section className="contact-details-section">

        <div className="contact-info-card">

          <h2>Email</h2>
          <p>ebarreirojunior@gmail.com</p>

        </div>

        <div className="contact-info-card">

          <h2>Location</h2>
          <p>Miami, Florida</p>

        </div>

      </section>


      <section className="contact-form-section">

        <form className="contact-message-form">

          <input
            className="contact-name-input"
            type="text"
            placeholder="Your Name"
          />

          <input
            className="contact-email-input"
            type="email"
            placeholder="Your Email"
          />

          <textarea
            className="contact-message-textarea"
            placeholder="Message"
          />

          <button className="contact-submit-button">
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}