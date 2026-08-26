'use client'
import { Content } from '../lib/content'

export default function Footer({ c }: { c: Content }) {
  return (
    <footer className="bg-[#1A3A5C] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#27AE60] to-[#1A3A5C] border border-white/20 flex items-center justify-center text-lg">💚</div>
              <span className="font-bold text-xl" style={{fontFamily:'Playfair Display, serif'}}>
                Health<span className="text-[#27AE60]">Connect</span>
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">{c.footer.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[c.nav.histoire, c.nav.impact, c.nav.temoignages, c.nav.partenaires, c.nav.rejoindre].map((item, i) => (
                <li key={i}><a href="#" className="text-white/60 text-sm hover:text-[#2ECC71] transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">contact@healthconnect.org</li>
              <li className="text-white/60 text-sm">+257 XX XX XX XX</li>
              <li className="text-white/60 text-sm">Bujumbura, Burundi</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center pt-8 gap-4 text-white/35 text-sm">
          <span>© 2025 <span className="text-[#2ECC71]">HealthConnect</span>. {c.footer.droits}</span>
          <span className="text-[#2ECC71]">Breaking barriers, healing lives 💚</span>
        </div>
      </div>
    </footer>
  )
}
