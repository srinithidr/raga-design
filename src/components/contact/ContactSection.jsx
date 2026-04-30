import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <span className="contact-tag">Get In Touch</span>
          <h2>Contact our professionals to know more about our services</h2>
          <p>
            Tell us about your project and goals. Our team will review your
            request and get back to you with the best next steps.
          </p>

          <div className="contact-info-list">
            <div>
              <h3>Email Us</h3>
              <p>ragadesings@gmail.com</p>
            </div>
            <div>
              <h3>Call Us</h3>
              <p>+91 9962856406</p>
            </div>
            <div>
              <h3>Office</h3>
              <p>Chennai, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-grid">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Enter your name" />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" placeholder="Enter phone number" />
            </label>
            <label>
              Email Address
              <input type="email" name="email" placeholder="Enter your email" />
            </label>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
          </div>

          <label className="contact-message-field">
            Message
            <textarea
              name="message"
              placeholder="Tell us about your requirement"
              rows={5}
            />
          </label>

          <button type="submit">Send Message ↗</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
