'use client'
import { Content } from '../lib/content'

export default function Hero({ c }: { c: Content }) {
  return (
    <section id="accueil" className="min-h-screen bg-gradient-to-br from-[#1A3A5C] via-[#2C5282] to-[#1a5c4a] relative flex items-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#27AE60]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#27AE60]/15 border border-[#27AE60]/30 text-[#2ECC71] text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wide">
            🌍 {c.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6" style={{fontFamily:'Playfair Display, serif'}}>
            {c.hero.titre1}<br />
            <em className="not-italic text-[#2ECC71]">{c.hero.titre2}</em>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            {c.hero.description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#rejoindre" className="inline-flex items-center gap-2 bg-[#27AE60] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#2ECC71] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#27AE60]/30">
              🤝 {c.hero.cta1}
            </a>
            <a href="#histoire" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all">
              {c.hero.cta2} →
            </a>
          </div>
        </div>

        {/* Right - Floating cards */}
        <div className="hidden md:flex flex-col gap-4">
          {[
            { icon: "👨‍⚕️", bg: "bg-[#27AE60]/20", titre: "Médecins disponibles", desc: "Consultations à distance 24h/7j", delay: "0.3s" },
            { icon: "🏥", bg: "bg-orange-500/20", titre: "Réseau hospitalier", desc: "Établissements partenaires vérifiés", delay: "0.5s", indent: true },
            { icon: "💊", bg: "bg-purple-500/20", titre: "Soutien médical", desc: "Médicaments, examens, hospitalisations", delay: "0.7s" },
          ].map((card, i) => (
            <div key={i}
              className={`flex items-center gap-4 bg-white/8 backdrop-blur border border-white/15 rounded-2xl p-5 ${card.indent ? 'ml-8' : ''}`}
              style={{ animation: `fadeUp 0.6s ease ${card.delay} forwards`, opacity: 0 }}
            >
              <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center text-2xl flex-shrink-0`}>{card.icon}</div>
              <div>
                <div className="text-white font-semibold text-sm">{card.titre}</div>
                <div className="text-white/60 text-xs mt-0.5">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
