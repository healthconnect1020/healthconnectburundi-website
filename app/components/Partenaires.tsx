'use client'
import { Content } from '../lib/content'

export default function Partenaires({ c }: { c: Content }) {
  return (
    <section id="partenaires" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-[#27AE60] text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-0.5 bg-[#27AE60] rounded" />
          {c.partenaires.eyebrow}
        </div>
        <h2 className="text-4xl font-bold text-[#1A3A5C] mb-4" style={{fontFamily:'Playfair Display, serif'}}>
          {c.partenaires.titre}
        </h2>
        <p className="text-slate-500 max-w-xl mb-14 leading-relaxed">{c.partenaires.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {c.partenaires.types.map((type, i) => (
            <div key={i} className="border-2 border-slate-100 rounded-2xl p-8 text-center hover:border-[#27AE60] hover:shadow-lg hover:shadow-[#27AE60]/5 transition-all">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="font-bold text-[#1A3A5C] text-lg mb-3">{type.titre}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="bg-slate-50 rounded-2xl p-10 text-center">
          <p className="text-slate-400 text-sm font-medium mb-7 uppercase tracking-wider">{c.partenaires.confiance}</p>
          <div className="flex flex-wrap justify-center gap-5">
            {['OMS / WHO', 'UNICEF', 'MSF', 'Union Africaine', 'Votre logo'].map((logo, i) => (
              <div key={i} className="bg-white rounded-xl px-6 py-4 text-slate-400 text-sm font-semibold shadow-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
