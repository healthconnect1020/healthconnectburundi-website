'use client'
import { useEffect, useRef, useState } from 'react'
import { Content } from '../lib/content'

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 2000
        const steps = 60
        const inc = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur += inc
          if (cur >= target) { cur = target; clearInterval(timer) }
          setCount(Math.floor(cur))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function Stats({ c }: { c: Content }) {
  const items = [
    { target: 1250, suffix: '+', label: c.stats.patients },
    { target: 87, suffix: '', label: c.stats.medecins },
    { target: 3400, suffix: '+', label: c.stats.consultations },
    { target: 12, suffix: '', label: c.stats.pays },
  ]

  return (
    <div className="bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {items.map((item, i) => (
          <div key={i} className="bg-white py-10 px-6 text-center">
            <div className="text-4xl md:text-5xl font-black text-[#1A3A5C] mb-2" style={{fontFamily:'Playfair Display, serif'}}>
              <Counter target={item.target} /><span className="text-[#27AE60]">{item.suffix}</span>
            </div>
            <div className="text-sm text-slate-500 font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
