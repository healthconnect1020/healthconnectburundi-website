'use client'
import { useState } from 'react'
import { Content } from '../lib/content'

export default function Contact({ c }: { c: Content }) {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-[#27AE60] text-xs font-bold uppercase tracking-widest mb-4">
          <span className="w-6 h-0.5 bg-[#27AE60] rounded" />
          {c.contact.eyebrow}
        </div>
        <h2 className="text-4xl font-bold text-[#1A3A5C] mb-14" style={{fontFamily:'Playfair Display, serif'}}>
          {c.contact.titre}
        </h2>

        <div className="grid md:grid-cols-5 gap-14">
          {/* Info */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#1A3A5C] text-xl mb-3">{c.contact.info}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{c.contact.infoDesc}</p>
            {[
              { icon: '📧', label: 'Email', val: 'contact@healthconnect.org' },
              { icon: '📞', label: 'Téléphone', val: '+257 XX XX XX XX' },
              { icon: '📍', label: 'Siège', val: 'Bujumbura, Burundi' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
                <div className="w-11 h-11 bg-[#E8F8EF] rounded-xl flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                <div>
                  <div className="font-semibold text-[#1A3A5C] text-sm">{item.label}</div>
                  <div className="text-slate-400 text-sm">{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-slate-50 rounded-2xl p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-[#1A3A5C] text-xl mb-2">Message envoyé !</h3>
                <p className="text-slate-500 text-sm">Notre équipe vous répondra dans les 48h.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-[#27AE60] text-sm font-medium underline">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">{c.contact.form.prenom}</label>
                    <input required type="text" placeholder="Marie" className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none transition-colors bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">{c.contact.form.nom}</label>
                    <input required type="text" placeholder="Dupont" className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none transition-colors bg-white" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Email *</label>
                  <input required type="email" placeholder="marie@example.com" className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none transition-colors bg-white" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">{c.contact.form.vous}</label>
                  <select className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none transition-colors bg-white text-slate-600">
                    {c.contact.form.options.map((opt, i) => <option key={i}>{opt}</option>)}
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">{c.contact.form.message}</label>
                  <textarea required rows={4} className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none transition-colors bg-white resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#1A3A5C] text-white font-semibold py-3.5 rounded-xl hover:bg-[#2C5282] transition-all hover:-translate-y-0.5">
                  ✉️ {c.contact.form.envoyer}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
