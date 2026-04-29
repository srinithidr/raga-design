import "@/pages/About.css"
import aboutImage from "../../assets/about/about.jpg"

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-column">
          <div className="about-main-frame"></div>
          <img className="about-main-image" src={aboutImage} alt="Consulting team meeting" />
          <div className="about-circle-image-wrap">
            <img className="about-circle-image" src={aboutImage} alt="Team planning discussion" />
          </div>
        </div>

        <div className="about-content-column">
          <span className="about-tag">About Raga Designers</span>
          <h2 className="about-title">Build Your Dream With us!!</h2>
          <p className="about-description">
           Raga Designers is a well established Website Designing Company in Chennai,
            India successfully entered in the global market 12 years back to conquer the local 
            marketplace like Chennai, Bangalore, Mumbai, Hyderabad, Delhi, Kolkata and global marketplace 
            like United States Of America (USA), United Kingdom (UK), Malaysia, Singapore, Sri Lanka, India, 
            United Arab Emirates (UAE), Australia with its extra-ordinary strong presence on the Web Design, Web Development,
             Ecommerce Development, SEO, Digital Marketimg. We have the most creative website designers near you to create a new
              design for your company using the latest website designing and developemtn standards.
          </p>

          {/* <div className="about-feature-cards">
            <article className="about-feature-card">
              <span className="about-feature-icon">✦</span>
              <div>
                <h3>Award Winning Team</h3>
              </div>
            </article>
            <article className="about-feature-card">
              <span className="about-feature-icon">◎</span>
              <div>
                <h3>Highest Success Rates</h3>
              </div>
            </article>
          </div>

          <div className="about-signature-row">
            <div className="about-signature-mark">Signature</div>
            <span className="about-signature-role">CEO Co-Founder</span>
          </div>

          <ul className="about-check-list">
            <li>Clear insights, actionable plans</li>
            <li>Industry-experienced consultants</li>
            <li>Scalable growth strategies</li>
          </ul> */}

          <button className="about-button" type="button">More Details ↗</button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
