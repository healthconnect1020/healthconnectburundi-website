'use client'
import { useState } from 'react'

const ADMIN_PASS = 'HealthConnect@Bu!!2490'

export default function AdminPage() {
  const [logged, setLogged] = useState(false)
  const [pass, setPass] = useState('')
  const [tab, setTab] = useState('contenu')
  const [saved, setSaved] = useState(false)

  const [stats, setStats] = useState({ patients: 1250, medecins: 87, consultations: 3400, pays: 12 })
  const [contact, setContact] = useState({ email: 'contact@healthconnect.org', phone: '+257 XX XX XX XX', adresse: 'Bujumbura, Burundi' })

  const showSaved = () => { setSaved(true); setTimeout(() => setSaved(false), 3000) }

  if (!logged) return (
    <div className="min-h-screen bg-[#1A3A5C] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-xl">
        <div className="text-center mb-6">
          <div className="text-4xl mb-3">⚙️</div>
          <h1 className="text-xl font-bold text-[#1A3A5C]">Administration</h1>
          <p className="text-slate-500 text-sm mt-1">HealthConnect</p>
        </div>
        <label className="block text-xs font-bold text-slate-700 mb-2 uppercase">Mot de passe</label>
        <input type="password" value={pass} onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && (pass === ADMIN_PASS ? setLogged(true) : alert('Mot de passe incorrect'))}
          placeholder="••••••••"
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none mb-4" />
        <button onClick={() => pass === ADMIN_PASS ? setLogged(true) : alert('Mot de passe incorrect')}
          className="w-full bg-[#27AE60] text-white font-semibold py-3 rounded-xl hover:bg-[#2ECC71] transition-all">
          Se connecter
        </button>
        <p className="text-center text-xs text-slate-400 mt-4">Mot de passe par défaut : <strong>admin123</strong></p>
      </div>
    </div>
  )

  const tabs = [
    { id: 'contenu', label: '📝 Contenu' },
    { id: 'stats', label: '📊 Statistiques' },
    { id: 'contact', label: '📬 Contact' },
    { id: 'temoignages', label: '⭐ Témoignages' },
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-[#1A3A5C] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">⚙️</span>
          <div>
            <h1 className="font-bold">Administration HealthConnect</h1>
            <p className="text-white/50 text-xs">Panel de gestion du site</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-white/70 text-sm hover:text-white">← Voir le site</a>
          <button onClick={() => setLogged(false)} className="bg-white/10 text-white text-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-all">
            🚪 Déconnexion
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b px-6">
        <div className="max-w-4xl mx-auto flex gap-1 pt-2">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-all border-b-2 ${tab === t.id ? 'border-[#27AE60] text-[#27AE60] bg-[#E8F8EF]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">

        {/* Saved toast */}
        {saved && (
          <div className="fixed bottom-6 right-6 bg-[#27AE60] text-white px-5 py-3 rounded-xl shadow-lg font-medium z-50 flex items-center gap-2">
            ✅ Modifications enregistrées !
          </div>
        )}

        {/* CONTENU */}
        {tab === 'contenu' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-bold text-[#1A3A5C] text-lg mb-6">Contenu de la page d'accueil</h2>
            <div className="grid gap-5">
              {[
                { label: 'Titre Hero (FR)', placeholder: 'Briser les barrières, soigner des vies' },
                { label: 'Titre Hero (EN)', placeholder: 'Breaking barriers, healing lives' },
                { label: 'Description Hero (FR)', placeholder: 'HealthConnect connecte...' },
                { label: 'Description Hero (EN)', placeholder: 'HealthConnect connects...' },
                { label: 'Titre Notre Histoire (FR)', placeholder: 'Née d\'une nécessité...' },
                { label: 'Titre Notre Histoire (EN)', placeholder: 'Born from necessity...' },
              ].map((f, i) => (
                <div key={i}>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">{f.label}</label>
                  <textarea rows={2} placeholder={f.placeholder} className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none resize-none" />
                </div>
              ))}
              <button onClick={showSaved} className="bg-[#27AE60] text-white font-semibold py-3 rounded-xl hover:bg-[#2ECC71] transition-all">
                💾 Enregistrer le contenu
              </button>
            </div>
          </div>
        )}

        {/* STATS */}
        {tab === 'stats' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-bold text-[#1A3A5C] text-lg mb-6">Statistiques affichées</h2>
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: 'Patients suivis', key: 'patients' },
                { label: 'Médecins partenaires', key: 'medecins' },
                { label: 'Consultations réalisées', key: 'consultations' },
                { label: 'Pays couverts', key: 'pays' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">{f.label}</label>
                  <input type="number" value={stats[f.key as keyof typeof stats]}
                    onChange={e => setStats(s => ({ ...s, [f.key]: parseInt(e.target.value) || 0 }))}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none" />
                </div>
              ))}
            </div>
            <button onClick={showSaved} className="mt-6 bg-[#27AE60] text-white font-semibold py-3 px-8 rounded-xl hover:bg-[#2ECC71] transition-all">
              💾 Mettre à jour les statistiques
            </button>
          </div>
        )}

        {/* CONTACT */}
        {tab === 'contact' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-bold text-[#1A3A5C] text-lg mb-6">Informations de contact</h2>
            <div className="grid gap-5">
              {[
                { label: 'Email', key: 'email', type: 'email' },
                { label: 'Téléphone', key: 'phone', type: 'text' },
                { label: 'Adresse / Siège', key: 'adresse', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">{f.label}</label>
                  <input type={f.type} value={contact[f.key as keyof typeof contact]}
                    onChange={e => setContact(c => ({ ...c, [f.key]: e.target.value }))}
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#27AE60] outline-none" />
                </div>
              ))}
              <button onClick={showSaved} className="bg-[#27AE60] text-white font-semibold py-3 rounded-xl hover:bg-[#2ECC71] transition-all">
                💾 Enregistrer les informations
              </button>
            </div>
          </div>
        )}

        {/* TEMOIGNAGES */}
        {tab === 'temoignages' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-bold text-[#1A3A5C] text-lg mb-2">Gestion des témoignages</h2>
            <p className="text-slate-500 text-sm mb-8">Ajoutez ou modifiez les témoignages affichés sur le site.</p>
            {[1,2,3].map(n => (
              <div key={n} className="border-2 border-slate-100 rounded-xl p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase">Témoignage #{n}</span>
                  <button className="text-red-400 text-xs hover:text-red-600">Supprimer</button>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Nom</label>
                    <input type="text" placeholder="Marie K." className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#27AE60] outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Lieu</label>
                    <input type="text" placeholder="Bujumbura, Burundi" className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#27AE60] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Témoignage</label>
                  <textarea rows={3} placeholder="Texte du témoignage..." className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:border-[#27AE60] outline-none resize-none" />
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <button className="flex-1 border-2 border-dashed border-slate-300 text-slate-400 font-medium py-3 rounded-xl hover:border-[#27AE60] hover:text-[#27AE60] transition-all text-sm">
                + Ajouter un témoignage
              </button>
              <button onClick={showSaved} className="bg-[#27AE60] text-white font-semibold py-3 px-8 rounded-xl hover:bg-[#2ECC71] transition-all">
                💾 Enregistrer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
