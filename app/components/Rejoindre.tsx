'use client'
import { Content } from '../lib/content'

const colors: Record<string, { bg: string; btn: string; top: string }> = {
  blue:   { bg: 'bg-blue-50',   btn: 'bg-blue-500 hover:bg-blue-600',   top: 'bg-blue-500' },
  green:  { bg: 'bg-[#E8F8EF]', btn: 'bg-[#27AE60] hover:bg-[#2ECC71]', top: 'bg-[#27AE60]' },
  orange: { bg: 'bg-orange-50', btn: 'bg-orange-500 hover:bg-orange-600', top: 'bg-orange-500' },
  purple: { bg: 'bg-purple-50', btn: 'bg-purple-600 hover:bg-purple-700', top: 'bg-purple-600' },
}

export default function Rejoindre({ c }: { c: Content }) {
  return (
    <section id="rejoindre" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-[#27AE60] text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-0.5 bg-[#27AE60] rounded" />
          {c.rejoindre.eyebrow}
        </div>
        <h2 className="text-4xl font-bold text-[#1A3A5C] mb-4" style={{fontFamily:'Playfair Display, serif'}}>
          {c.rejoindre.titre}
        </h2>
        <p className="text-slate-500 max-w-xl mb-14 leading-relaxed">{c.rejoindre.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.rejoindre.cards.map((card, i) => {
            const col = colors[card.color]
            return (
              <div key={i} className={`${col.bg} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all`}>
                <div className={`h-1 ${col.top}`} />
                <div className="p-7 text-center">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-[#1A3A5C] text-lg mb-3">{card.titre}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <a href="#contact" className={`inline-block ${col.btn} text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all`}>
                    {card.cta}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
