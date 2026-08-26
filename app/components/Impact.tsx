'use client'
import { Content } from '../lib/content'

export default function Impact({ c }: { c: Content }) {
  return (
    <section id="impact" className="py-24 px-6 bg-[#1A3A5C]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-[#2ECC71] text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-0.5 bg-[#2ECC71] rounded" />
          {c.impact.eyebrow}
        </div>
        <div className="md:flex md:items-end md:justify-between mb-14">
          <h2 className="text-4xl font-bold text-white leading-tight max-w-lg" style={{fontFamily:'Playfair Display, serif'}}>
            {c.impact.titre}
          </h2>
          <p className="text-white/60 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed">{c.impact.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {c.impact.cards.map((card, i) => (
            <div key={i} className="bg-white/6 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-[#27AE60]/15 flex items-center justify-center text-3xl mb-5">{card.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3">{card.titre}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{card.desc}</p>
              <div className="text-[#2ECC71] text-4xl font-black" style={{fontFamily:'Playfair Display, serif'}}>{card.nombre}</div>
              <div className="text-white/40 text-xs mt-1">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
