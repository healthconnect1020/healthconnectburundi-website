export const content = {
  fr: {
    nav: {
      histoire: "Notre Histoire",
      impact: "Impact",
      temoignages: "Témoignages",
      partenaires: "Partenaires",
      rejoindre: "Rejoindre",
      contact: "Contact",
    },
    hero: {
      badge: "Association de Santé Communautaire",
      titre1: "Briser les barrières,",
      titre2: "soigner des vies",
      description: "HealthConnect connecte les communautés rurales avec des médecins qualifiés à travers des consultations médicales à distance, garantissant que chaque patient reçoit les soins qu'il mérite, peu importe sa localisation.",
      cta1: "Rejoignez-nous",
      cta2: "Notre Histoire",
    },
    stats: {
      patients: "Patients suivis",
      medecins: "Médecins partenaires",
      consultations: "Consultations réalisées",
      pays: "Pays couverts",
    },
    histoire: {
      eyebrow: "Notre Histoire",
      titre: "Née d'une nécessité, portée par une vision",
      description: "HealthConnect est née d'un constat simple et douloureux : des millions de personnes en Afrique n'ont pas accès à des soins médicaux de qualité, non pas par manque de volonté, mais par manque d'accès. Nous avons décidé de changer cela.",
      annee: "Année de fondation",
      timeline: [
        { annee: "2023", titre: "La vision naît", desc: "Constat de l'inégalité d'accès aux soins dans les zones rurales. Naissance de l'idée HealthConnect." },
        { annee: "2024", titre: "Construction de la plateforme", desc: "Développement de la plateforme numérique, recrutement des premiers médecins partenaires et agents de santé." },
        { annee: "2025", titre: "Lancement officiel", desc: "Premiers patients enregistrés, premières consultations à distance, premiers partenariats." },
      ]
    },
    impact: {
      eyebrow: "Notre Impact",
      titre: "Des vies transformées, des communautés guéries",
      description: "Chaque chiffre représente une vie humaine. Chaque consultation, un espoir rendu possible.",
      cards: [
        { icon: "🩺", titre: "Accès aux soins", desc: "Des patients en zones rurales isolées reçoivent des consultations médicales de qualité sans se déplacer.", nombre: "3,400+", label: "consultations réalisées" },
        { icon: "💰", titre: "Soutien financier", desc: "Grâce à nos bailleurs et bienfaiteurs, des patients défavorisés reçoivent médicaments et soins pris en charge.", nombre: "$240K+", label: "de soins financés" },
        { icon: "❤️", titre: "Taux de guérison", desc: "La majorité de nos patients suivis atteignent un état de santé stable ou guéri grâce à notre suivi continu.", nombre: "78%", label: "taux de guérison" },
      ]
    },
    temoignages: {
      eyebrow: "Témoignages",
      titre: "Ce que disent nos patients",
      description: "Des histoires vraies de patients qui ont bénéficié de notre plateforme et qui ont vu leur vie changer.",
      items: [
        { nom: "Marie K.",photo: "public/patients/marie-k.jpg", initiale: "M", lieu: "Bujumbura, Burundi", texte: "Grâce à HealthConnect, j'ai pu consulter un cardiologue depuis mon village sans me déplacer. Le médecin était professionnel et attentif. C'est un miracle pour nous qui vivons loin des grandes villes.", etoiles: 5, initiale: "M" },
        { nom: "Jean-Pierre N.", lieu: "Gitega, Burundi", texte: "Mes médicaments ont été entièrement pris en charge par un bienfaiteur que je ne connais pas. Cette générosité m'a sauvé la vie. Je ne savais pas que de telles initiatives existaient.", etoiles: 5, initiale: "J" },
        { nom: "Amina S.", lieu: "Ngozi, Burundi", texte: "L'agent de santé est venu me voir à domicile, a fait un dossier complet et j'ai eu une consultation vidéo avec un médecin spécialiste le lendemain. Service rapide et humain.", etoiles: 5, initiale: "A" },
        { nom: "Paul M.", lieu: "Rumonge, Burundi", texte: "Mon fils était hospitalisé et les frais étaient énormes. HealthConnect nous a aidés à trouver un financement. Je ne sais pas comment remercier cette équipe extraordinaire.", etoiles: 5, initiale: "P" },
        { nom: "Cécile B.", lieu: "Muyinga, Burundi", texte: "Une plateforme qui met vraiment l'humain au centre. Les agents sont formés, les médecins sont compétents et disponibles. C'est exactement ce dont notre pays avait besoin.", etoiles: 5, initiale: "C" },
        { nom: "Ibrahim T.", lieu: "Makamba, Burundi", texte: "J'ai pu avoir accès à un dermatologue pour la première fois de ma vie. Sans HealthConnect, je n'aurais jamais pu me permettre cette consultation. Merci infiniment.", etoiles: 5, initiale: "I" },
      ]
    },
    partenaires: {
      eyebrow: "Partenaires & Bailleurs",
      titre: "Ensemble, nous faisons la différence",
      description: "HealthConnect s'appuie sur un réseau de partenaires engagés qui croient en notre mission.",
      types: [
        { icon: "🏛️", titre: "Bailleurs de fonds", desc: "Organisations internationales, gouvernements et fondations qui financent les soins médicaux de nos patients." },
        { icon: "🤝", titre: "Partenaires techniques", desc: "Hôpitaux, cliniques et organisations médicales qui collaborent avec nous sur le terrain." },
        { icon: "🎁", titre: "Bienfaiteurs", desc: "Individus généreux qui contribuent ponctuellement pour financer un médicament ou une consultation." },
      ],
      confiance: "Ils nous font confiance",
    },
    rejoindre: {
      eyebrow: "Rejoignez-nous",
      titre: "Votre place dans notre mission",
      description: "Que vous soyez médecin, organisation, entreprise ou simplement une personne qui veut aider — HealthConnect a une place pour vous.",
      cards: [
        { icon: "👨‍⚕️", titre: "Médecin", desc: "Proposez vos consultations à distance et aidez des patients dans votre spécialité.", cta: "Devenir médecin HC", color: "blue" },
        { icon: "💼", titre: "Bailleur de fonds", desc: "Financez les soins de patients défavorisés et suivez l'impact de vos contributions.", cta: "Devenir bailleur", color: "green" },
        { icon: "🏥", titre: "Partenaire", desc: "Associez votre organisation à notre mission pour un impact concret.", cta: "Devenir partenaire", color: "orange" },
        { icon: "🎁", titre: "Bienfaiteur", desc: "Aidez ponctuellement en finançant un médicament ou une consultation.", cta: "Faire un don", color: "purple" },
      ]
    },
    contact: {
      eyebrow: "Contactez-nous",
      titre: "Parlons de votre engagement",
      description: "Que vous souhaitiez rejoindre notre réseau ou en savoir plus, notre équipe vous répondra dans les 48h.",
      info: "Nous sommes là pour vous",
      infoDesc: "Notre équipe est disponible du lundi au vendredi de 8h à 17h.",
      form: {
        prenom: "Prénom *",
        nom: "Nom *",
        email: "Email *",
        vous: "Vous êtes ?",
        options: ["Sélectionner...", "Médecin", "Bailleur de fonds", "Partenaire", "Bienfaiteur", "Autre"],
        message: "Votre message *",
        envoyer: "Envoyer le message",
      }
    },
    footer: {
      description: "Breaking barriers, healing lives. Connecter les communautés rurales aux soins médicaux de qualité.",
      droits: "Tous droits réservés.",
    }
  },
  en: {
    nav: {
      histoire: "Our Story",
      impact: "Impact",
      temoignages: "Testimonials",
      partenaires: "Partners",
      rejoindre: "Join Us",
      contact: "Contact",
    },
    hero: {
      badge: "Community Health Association",
      titre1: "Breaking barriers,",
      titre2: "healing lives",
      description: "HealthConnect connects rural communities with qualified doctors through remote medical consultations, ensuring every patient receives the care they deserve, regardless of location.",
      cta1: "Join Us",
      cta2: "Our Story",
    },
    stats: {
      patients: "Patients followed",
      medecins: "Partner doctors",
      consultations: "Consultations completed",
      pays: "Countries covered",
    },
    histoire: {
      eyebrow: "Our Story",
      titre: "Born from necessity, driven by vision",
      description: "HealthConnect was born from a simple and painful observation: millions of people in Africa lack access to quality medical care, not for lack of will, but lack of access. We decided to change that.",
      annee: "Year founded",
      timeline: [
        { annee: "2023", titre: "The vision is born", desc: "Observation of unequal access to healthcare in rural areas. Birth of the HealthConnect idea." },
        { annee: "2024", titre: "Building the platform", desc: "Development of the digital platform, recruitment of first partner doctors and health agents." },
        { annee: "2025", titre: "Official launch", desc: "First patients registered, first remote consultations, first partnerships with funders." },
      ]
    },
    impact: {
      eyebrow: "Our Impact",
      titre: "Lives transformed, communities healed",
      description: "Every number represents a human life. Every consultation, a hope made possible.",
      cards: [
        { icon: "🩺", titre: "Healthcare Access", desc: "Patients in isolated rural areas receive quality medical consultations without traveling hundreds of kilometers.", nombre: "3,400+", label: "consultations completed" },
        { icon: "💰", titre: "Financial Support", desc: "Thanks to our funders, disadvantaged patients receive covered medicines, tests and hospital care.", nombre: "$240K+", label: "in funded care" },
        { icon: "❤️", titre: "Recovery Rate", desc: "The majority of our monitored patients achieve a stable or recovered health status thanks to our follow-up.", nombre: "78%", label: "recovery rate" },
      ]
    },
    temoignages: {
      eyebrow: "Testimonials",
      titre: "What our patients say",
      description: "Real stories from patients who have benefited from our platform and seen their lives change.",
      items: [
        { nom: "Marie K.", lieu: "Bujumbura, Burundi", texte: "Thanks to HealthConnect, I was able to consult a cardiologist from my village without traveling. The doctor was professional and attentive. It's a miracle for us who live far from big cities.", etoiles: 5, initiale: "M" },
        { nom: "Jean-Pierre N.", lieu: "Gitega, Burundi", texte: "My medications were fully covered by a benefactor I don't know. This generosity saved my life. I didn't know such initiatives existed.", etoiles: 5, initiale: "J" },
        { nom: "Amina S.", lieu: "Ngozi, Burundi", texte: "The health agent came to see me at home, made a complete file and I had a video consultation with a specialist doctor the next day. Fast and human service.", etoiles: 5, initiale: "A" },
        { nom: "Paul M.", lieu: "Rumonge, Burundi", texte: "My son was hospitalized and the costs were enormous. HealthConnect helped us find funding. I don't know how to thank this extraordinary team.", etoiles: 5, initiale: "P" },
        { nom: "Cécile B.", lieu: "Muyinga, Burundi", texte: "A platform that truly puts people first. The agents are trained, the doctors are competent and available. This is exactly what our country needed.", etoiles: 5, initiale: "C" },
        { nom: "Ibrahim T.", lieu: "Makamba, Burundi", texte: "I was able to see a dermatologist for the first time in my life. Without HealthConnect, I could never have afforded this consultation. Thank you so much.", etoiles: 5, initiale: "I" },
      ]
    },
    partenaires: {
      eyebrow: "Partners & Funders",
      titre: "Together, we make a difference",
      description: "HealthConnect relies on a network of committed partners who believe in our mission.",
      types: [
        { icon: "🏛️", titre: "Funders", desc: "International organizations, governments and foundations that fund medical care for our patients." },
        { icon: "🤝", titre: "Technical Partners", desc: "Hospitals, clinics and medical organizations that collaborate with us in the field." },
        { icon: "🎁", titre: "Benefactors", desc: "Generous individuals who contribute to fund a specific medicine, consultation or medical test." },
      ],
      confiance: "They trust us",
    },
    rejoindre: {
      eyebrow: "Join Us",
      titre: "Your place in our mission",
      description: "Whether you are a doctor, organization, company or simply someone who wants to help — HealthConnect has a place for you.",
      cards: [
        { icon: "👨‍⚕️", titre: "Doctor", desc: "Offer your remote consultations and help patients who lack access to care in your specialty.", cta: "Become HC doctor", color: "blue" },
        { icon: "💼", titre: "Funder", desc: "Fund care for disadvantaged patients and receive detailed impact reports on your contributions.", cta: "Become a funder", color: "green" },
        { icon: "🏥", titre: "Partner", desc: "Associate your organization with our mission and have a concrete impact.", cta: "Become a partner", color: "orange" },
        { icon: "🎁", titre: "Benefactor", desc: "Help occasionally by funding a medicine or consultation for a specific patient.", cta: "Make a donation", color: "purple" },
      ]
    },
    contact: {
      eyebrow: "Contact Us",
      titre: "Let's talk about your commitment",
      description: "Whether you want to join our network or learn more, our team will respond within 48h.",
      info: "We are here for you",
      infoDesc: "Our team is available Monday to Friday from 8am to 5pm.",
      form: {
        prenom: "First name *",
        nom: "Last name *",
        email: "Email *",
        vous: "You are?",
        options: ["Select...", "Doctor", "Funder", "Partner", "Benefactor", "Other"],
        message: "Your message *",
        envoyer: "Send message",
      }
    },
    footer: {
      description: "Breaking barriers, healing lives. Connecting rural communities to quality healthcare.",
      droits: "All rights reserved.",
    }
  }
}

export type Lang = 'fr' | 'en'
export type Content = typeof content.fr
