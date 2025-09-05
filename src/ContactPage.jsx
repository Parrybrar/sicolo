import React from "react";
import "./PageStyles.css";

function ContactPage() {
  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out for collaborations or inquiries.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
