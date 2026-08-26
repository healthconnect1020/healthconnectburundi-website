'use client'
import { useState } from 'react'
import { Content } from '../lib/content'

interface NavbarProps {
  c: Content
  lang: string
  setLang: (l: 'fr' | 'en') => void
}

export default function Navbar({ c, lang, setLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: '#histoire', label: c.nav.histoire },
    { href: '#impact', label: c.nav.impact },
    { href: '#temoignages', label: c.nav.temoignages },
    { href: '#partenaires', label: c.nav.partenaires },
    { href: '#rejoindre', label: c.nav.rejoindre },
  ]

  return (
    <>
      {/* Lang bar */}
      <div className="bg-[#1A3A5C] px-6 py-2 flex justify-end gap-2">
        <button
          onClick={() => setLang('fr')}
          className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${lang === 'fr' ? 'bg-[#27AE60] border-[#27AE60] text-white' : 'border-white/30 text-white/60 hover:border-white/60'}`}
        >🇫🇷 FR</button>
        <button
          onClick={() => setLang('en')}
          className={`text-xs font-medium px-3 py-1 rounded-full border transition-all ${lang === 'en' ? 'bg-[#27AE60] border-[#27AE60] text-white' : 'border-white/30 text-white/60 hover:border-white/60'}`}
        >🇬🇧 EN</button>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#27AE60] to-[#1A3A5C] flex items-center justify-center text-lg">💚</div>
            <span className="font-bold text-[#1A3A5C] text-lg" style={{fontFamily:'Playfair Display, serif'}}>
              Health<span className="text-[#27AE60]">Connect</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-slate-600 hover:text-[#1A3A5C] hover:bg-slate-100 px-3 py-2 rounded-lg transition-all">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="text-sm font-semibold bg-[#27AE60] text-white px-4 py-2 rounded-lg hover:bg-[#2ECC71] transition-all ml-2">
                {c.nav.contact}
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-600 py-2 border-b border-slate-100">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold bg-[#27AE60] text-white px-4 py-2 rounded-lg text-center mt-2">
              {c.nav.contact}
            </a>
          </div>
        )}
      </nav>
    </>
  )
}
