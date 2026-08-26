'use client'
import { useState } from 'react'
import { Content } from '../lib/content'

export default function Temoignages({ c }: { c: Content }) {
  const [current, setCurrent] = useState(0)
  const items = c.temoignages.items
  const visible = 3
  const maxIndex = items.length - visible

  const prev = () => setCurrent(p => Math.max(0, p - 1))
  const next = () => setCurrent(p => Math.min(maxIndex, p + 1))

  return (
    <section id="temoignages" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-14 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#27AE60] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-6 h-0.5 bg-[#27AE60] rounded" />
              {c.temoignages.eyebrow}
            </div>
            <h2 className="text-4xl font-bold text-[#1A3A5C] leading-tight" style={{fontFamily:'Playfair Display, serif'}}>
              {c.temoignages.titre}
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg text-sm leading-relaxed">{c.temoignages.description}</p>
          </div>
          {/* Navigation */}
          <div className="flex gap-3 self-end">
            <button onClick={prev} disabled={current === 0}
              className="w-11 h-11 rounded-full border-2 border-slate-200 text-slate-400 hover:border-[#27AE60] hover:text-[#27AE60] disabled:opacity-30 transition-all text-lg flex items-center justify-center">
              ←
            </button>
            <button onClick={next} disabled={current >= maxIndex}
              className="w-11 h-11 rounded-full border-2 border-slate-200 text-slate-400 hover:border-[#27AE60] hover:text-[#27AE60] disabled:opacity-30 transition-all text-lg flex items-center justify-center">
              →
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(calc(-${current} * (33.333% + 1.5rem)))` }}
          >
            {items.map((item, i) => (
              <div key={i} className="min-w-[calc(33.333%-1rem)] bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: item.etoiles }).map((_, s) => (
                    <span key={s} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <div className="text-5xl text-[#27AE60]/20 font-black leading-none mb-2" style={{fontFamily:'Georgia, serif'}}>"</div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 italic mb-6">
                  {item.texte}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#27AE60] to-[#1A3A5C] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.initiale}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A3A5C] text-sm">{item.nom}</div>
                    <div className="text-slate-400 text-xs flex items-center gap-1">
                      <span>📍</span>{item.lieu}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-[#27AE60] w-6' : 'bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
