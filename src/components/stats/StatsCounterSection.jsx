import { useEffect, useRef, useState } from "react"
import "./StatsCounterSection.css"

const statsData = [
  {
    value: 30,
    suffix: "+",
    label: "Specialists With Real-World Experience",
  },
  {
    value: 99,
    suffix: "%",
    label: "Increased conversions growth for clients",
  },
  {
    value: 17,
    suffix: "K+",
    label: "Creative and successfully delivered projects",
  },
  {
    value: 43,
    suffix: "+",
    label: "Award-winning web design services",
  },
]

function CounterItem({ target, suffix, label, startAnimation }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) {
      return
    }

    const duration = 1500
    const startTime = performance.now()

    let frameId = 0

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [startAnimation, target])

  return (
    <article className="stats-card">
      <h3 className="stats-number">
        {count}
        {suffix}
      </h3>
      <p className="stats-label">{label}</p>
    </article>
  )
}

function StatsCounterSection() {
  const sectionRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <h2 className="stats-heading">Work Showcases</h2>
      <div className="stats-curve"></div>
      
      <div className="stats-container">
        {statsData.map((item) => (
          <CounterItem
            key={item.label}
            target={item.value}
            suffix={item.suffix}
            label={item.label}
            startAnimation={hasStarted}
          />
        ))}
      </div>
    </section>
  )
}

export default StatsCounterSection
