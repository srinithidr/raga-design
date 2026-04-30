import "./SiteFooter.css";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-brand">
          <h3>RagaDesign</h3>
          <p>
            We help brands grow with strategic consulting, digital products, and
            high-impact design execution.
          </p>
        </div>

        <div className="site-footer-links">
          <h4>Quick Links</h4>
          <a href="/">About us</a>
          <a href="/about">Get Quote</a>
          <a href="/contact">Term & Conditions</a>
        </div>

        <div className="site-footer-links">
          <h4>Services</h4>
          <a href="/services/web-development">Logo Designing</a>
          <a href="/services/app-development">Web Designing</a>
          <a href="/services/ui-ux-design">Domain Services</a>
        </div>

        <div className="site-footer-contact">
          <h4>Contact</h4>
          <p>ragadesigns@ragadesign.com</p>
          <p>+91 9962856406</p>
          <p>Chennai, India</p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© 2026 RagaDesign. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
