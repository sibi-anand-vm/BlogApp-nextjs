"use client";
import { useState } from "react";
import './contact.css'
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <h3>
        Have any questions or want to get in touch? Feel free to reach out
        using the form below.
      </h3>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Our Address</h2>
          <p>123 Blog Street, Suite 100</p>
          <p>Blog City, BC 12345</p>
          <p>Email: contact@blogwebsite.com</p>
          <p>Phone: +1 234 567 8901</p>

          <h2 className="text-blue-400">Follow Us</h2>
          <img
            src="https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-2-1.png"
            alt="Social Media Icons"
            className="social-icons"
          />
        </div>
      </div>
    </main>
  );
}
