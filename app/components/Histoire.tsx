'use client'
import { Content } from '../lib/content'

export default function Histoire({ c }: { c: Content }) {
  return (
    <section id="histoire" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-[#E8F8EF] to-slate-100 rounded-3xl flex items-center justify-center text-8xl">
            🌍
          </div>
          <div className="absolute -bottom-5 -right-5 bg-[#1A3A5C] text-white p-5 rounded-2xl shadow-xl">
            <div className="text-3xl font-black text-[#2ECC71]" style={{fontFamily:'Playfair Display, serif'}}>2023</div>
            <div className="text-xs text-white/60 mt-0.5">{c.histoire.annee}</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 text-[#27AE60] text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-6 h-0.5 bg-[#27AE60] rounded" />
            {c.histoire.eyebrow}
          </div>
          <h2 className="text-4xl font-bold text-[#1A3A5C] mb-5 leading-tight" style={{fontFamily:'Playfair Display, serif'}}>
            {c.histoire.titre}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10">{c.histoire.description}</p>

          <div className="flex flex-col gap-6">
            {c.histoire.timeline.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="mt-1.5 w-3 h-3 rounded-full bg-[#27AE60] flex-shrink-0 shadow-[0_0_0_4px_#E8F8EF]" />
                <div>
                  <h4 className="font-semibold text-[#1A3A5C] mb-1">{item.annee} — {item.titre}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
