import { useEffect, useMemo, useState } from "react"
import "./TestimonialsSection.css"

const testimonials = [
  {
    id: 1,
    review:
      "Their business consulting services provided measurable results and long-term value. We appreciated their data-driven insights, responsiveness, and commitment.",
    name: "David Richardson",
    role: "Growth Consultant",
    avatarBg: "#4f8f8f",
  },
  {
    id: 2,
    review:
      "Working with this consulting team was a game-changer for our business. Their strategic insights, clear communication and practical recommendations helped.",
    name: "Jonathan William",
    role: "Business Analyst",
    avatarBg: "#8d5b49",
  },
  {
    id: 3,
    review:
      "The consultants took the time to understand our challenges and delivered solutions tailored to our goals. Their hands-on support and structured approach made.",
    name: "Emma Johnson",
    role: "Senior Advisor",
    avatarBg: "#837b71",
  },
  {
    id: 4,
    review:
      "From initial analysis to execution, their expertise and professionalism were evident at every stage. We gained clarity, confidence and a strong roadmap that.",
    name: "Alexander James",
    role: "Growth Strategist",
    avatarBg: "#1f8aa3",
  },
  {
    id: 5,
    review:
      "They helped us streamline operations and improve decision making with clear frameworks. The whole engagement felt thoughtful, focused, and deeply practical.",
    name: "Sophia Miller",
    role: "Operations Lead",
    avatarBg: "#6f8a55",
  },
  {
    id: 6,
    review:
      "Their consulting support gave us a clear roadmap for expansion. We now have better KPIs, team alignment, and confidence in our decisions.",
    name: "Michael Brown",
    role: "Strategy Director",
    avatarBg: "#5c6f9a",
  },
  {
    id: 7,
    review:
      "We saw measurable improvement in process efficiency within weeks. The team was professional, practical, and always available when we needed guidance.",
    name: "Priya Nair",
    role: "Project Manager",
    avatarBg: "#8b5c7a",
  },
  {
    id: 8,
    review:
      "From planning to execution, everything was handled with strong expertise. Their recommendations helped us reduce risk and move faster with confidence.",
    name: "Daniel Clark",
    role: "Product Head",
    avatarBg: "#4e7f6d",
  },
  {
    id: 9,
    review:
      "Excellent communication and a very structured approach. They simplified complex challenges and helped our leadership team make better strategic choices.",
    name: "Aisha Khan",
    role: "Business Consultant",
    avatarBg: "#8d6d46",
  },
]

function getVisibleCards(width) {
  if (width <= 640) return 1
  if (width <= 980) return 2
  return 4
}

function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState(() => getVisibleCards(window.innerWidth))
  const [currentPage, setCurrentPage] = useState(0)

  const pageCount = useMemo(
    () => Math.ceil(testimonials.length / visibleCards),
    [visibleCards]
  )

  const visibleTestimonials = useMemo(() => {
    const start = currentPage * visibleCards
    return testimonials.slice(start, start + visibleCards)
  }, [currentPage, visibleCards])

  useEffect(() => {
    const onResize = () => {
      setVisibleCards(getVisibleCards(window.innerWidth))
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (currentPage > pageCount - 1) {
      setCurrentPage(0)
    }
  }, [pageCount, currentPage])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pageCount)
    }, 3500)

    return () => window.clearInterval(intervalId)
  }, [pageCount])

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <span className="testimonials-tag">Clients Feedback</span>
        <h2 className="testimonials-title">Whatever your business is, there is a possibility
we have already developed a project for someone like you</h2>

        <div
          className="testimonials-grid"
          style={{ gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))` }}
        >
          {visibleTestimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <div className="testimonial-top">
                <span className="testimonial-quote">❝</span>
                <div className="testimonial-rating">
                  <span className="testimonial-stars">★★★★★</span>
                  <small>5.0 out of 4.5</small>
                </div>
              </div>

              <p className="testimonial-review">"{item.review}"</p>

              <div className="testimonial-user">
                <span className="testimonial-avatar" style={{ backgroundColor: item.avatarBg }}>
                  {item.name.charAt(0)}
                </span>
                <div>
                  <small>{item.role}</small>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonials pages">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-dot ${index === currentPage ? "is-active" : ""}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
