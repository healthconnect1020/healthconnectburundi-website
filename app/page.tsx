'use client'
import { useState } from 'react'
import { content, Lang } from './lib/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Histoire from './components/Histoire'
import Impact from './components/Impact'
import Temoignages from './components/Temoignages'
import Partenaires from './components/Partenaires'
import Rejoindre from './components/Rejoindre'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const [lang, setLang] = useState<Lang>('fr')
  const c = content[lang]

  return (
    <main>
      <Navbar c={c} lang={lang} setLang={setLang} />
      <Hero c={c} />
      <Stats c={c} />
      <Histoire c={c} />
      <Impact c={c} />
      <Temoignages c={c} />
      <Partenaires c={c} />
      <Rejoindre c={c} />
      <Contact c={c} />
      <Footer c={c} />
    </main>
  )
}
