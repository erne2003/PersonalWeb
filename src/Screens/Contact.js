import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qu03dit",
      "template_fuex6v3",
      form.current,
      "jYeKPowyF-rTt6Xzw"
    )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("EmailJS error:", error);
        alert("Failed to send message.");
      });
  };

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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-message-form"
        >

          <input
            className="contact-name-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            className="contact-email-input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            className="contact-message-textarea"
            name="message"
            placeholder="Message"
            required
          />

          <button
            type="submit"
            className="contact-submit-button"
          >
            Send Message
          </button>

        </form>

      </section>

    </main>
  );
}