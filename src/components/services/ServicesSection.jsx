import "./ServicesSection.css"
import serviceImage from "../../assets/services/service.jpg"

const serviceCards = [
  {
    id: "01",
    icon: "❖",
    title: "Graphic Design",
    description: "We make more crowd dive into your business with unique and captivating designs. Inhere we make the best marketing materials for any business.",
  },
  {
    id: "02",
    icon: "◔",
    title: "Website Design",
    description: "Get the best website for your business, products and services with trending features. We do customization and website revamping in a cost efficient manner.",
  },
  {
    id: "03",
    icon: "✣",
    title: "Website Development",
    description: "Developers at Raga Designers are skilled and experience in using the latest website building technologies to give out the best performing site.",
  },
  {
    id: "04",
    icon: "✦",
    title: "E-Commerce Development",
    description: "We let your products reach a wider audience. Kick start your online business with the best performing E-commerce website",
  },
]

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        <span className="services-tag">Our Services</span>
      {/* //  <h2 className="services-title">Innovates Services That Elevate Your Business</h2> */}

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.id}>
              <span className="service-icon">{service.icon}</span>
              <span className="service-id">{service.id}.</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button type="button" className="service-button">
                <span>Get Started</span>
                <span>↗</span>
              </button>
            </article>
          ))}

          <article className="service-card service-card-highlight">
            <div className="service-highlight-overlay"></div>
            <img src={serviceImage} alt="Consultants discussing strategy" className="service-highlight-image" />
            <div className="service-highlight-content">
              <span className="service-icon">◔</span>
              <h3>Digital Marketing & SEO</h3>
              <p>Our SEO experts utilize the keywords to the fullest to rank high. We make your website get optimized as per the Search engine criteria.</p>
              <button type="button" className="service-button service-button-highlight">
                <span>Get Started</span>
                <span>↗</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
