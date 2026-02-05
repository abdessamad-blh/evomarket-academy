"use client";

const Icons = {
  smartphone: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  camera: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  scissors: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  clockLarge: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  certificate: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
  laptop: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  mapPin: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
};

const sessions = [
  {
    // date: "31",
    // month: "JANVIER",
    // day: "SAMEDI",
    seance: "séance 1",
    trainer: "Belahcen Mouad",
    title: "PhD en Marketing & Fondateur de l'agence EvoMarket",
    theme: "Construire votre image de marque & lancer votre première campagne Meta",
    icon: Icons.smartphone,
    color: "from-primary/20 to-primary/5",
  },
  {
    seance: "séance 2",
    trainer: "Youness El Moumine / Mohamed Qattar",
    title: "Filmmakers et formateurs Professionnels",
    theme: "Filmer et maîtriser la lumière pour vos vidéos promotionnelles",
    icon: Icons.camera,
    color: "from-accent/20 to-accent/5",
    bonus: "Séance en ligne pour Q&A et défis pratiques",
  },
  {
    seance: "séance 3",
    trainer: "Mandouche Ayoub",
    title: "Formateur en montage Video",
    theme: "Apprendre à monter vos vidéos, intégrer votre script et ajuster le rythme pour un format optimisé",
    icon: Icons.scissors,
    color: "from-blue-500/20 to-blue-500/5",
    bonus: "Séance en ligne pour correction & accompagnement",
  },
  {
    seance: "séance 4",
    trainer: "Rachid Sami",
    title: "PhD & Comptable agréé",
    theme: "Création d'entreprise & obligations juridiques et fiscales",
    icon: Icons.chart,
    color: "from-green-500/20 to-green-500/5",
  },
];

export default function Planning() {
  return (
    <section id="planning" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #F4B223 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Programme
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mt-6 mb-4">
            PLANNING
          </h2>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${session.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Date Badge */}
                <div className="absolute top-8 right-8 text-center">
                  <div className="bg-primary text-dark rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {/* <p className="font-heading text-4xl leading-none">{session.date}</p> */}
                    <p className="text-s font-bold mt-1">{session.seance}</p>
                  </div>
                  {/* <p className="text-primary text-sm font-bold mt-2">{session.day}</p> */}
                </div>

                {/* Icon */}
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {session.icon}
                </div>

                {/* Trainer Info */}
                <div className="mb-6 pr-24">
                  <p className="text-primary font-bold text-xl mb-2">Avec {session.trainer}</p>
                  <p className="text-gray-400 text-sm">{session.title}</p>
                </div>

                {/* Theme */}
                <div className="space-y-3">
                  <p className="text-white font-bold text-lg">Thème :</p>
                  <p className="text-gray-300 leading-relaxed">
                    {session.theme}
                  </p>
                </div>

                {/* Bonus */}
                {session.bonus && (
                  <div className="mt-6 bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-primary font-bold text-sm mb-1">+ BONUS</p>
                    <p className="text-gray-300 text-sm">{session.bonus}</p>
                  </div>
                )}

                {/* Time Badge */}
                {/* <div className="mt-6 inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <span className="text-primary">{Icons.clock}</span>
                  <span className="text-white text-sm font-semibold">09h - 13h . Amip Casa</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
          <div className="mt-16 text-center space-y-6 animate-fade-in">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
              {/* <p className="text-primary font-heading text-3xl mb-2">{Icons.clockLarge}</p>
              <p className="text-white font-bold mb-1">La durée</p> */}
              <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-primary">{Icons.clockLarge}</span>
              <h3 className="text-white font-bold text-x">La durée</h3>
              </div>
              <p className="text-gray-400 text-sm">De 9h00 à 13h00, 6 cours<br/> sur 4 semaines.</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
              {/* <p className="text-primary font-heading text-3xl mb-2">{Icons.certificate}</p>
              <p className="text-white font-bold mb-1">Attestation</p> */}
              <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-primary">{Icons.certificate}</span>
              <h3 className="text-white font-bold text-x">Attestation</h3>
              </div>
              <p className="text-gray-400 text-sm">Officielle et incluse</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-xl border border-primary/20">
              {/* <p className="text-primary font-heading text-3xl mb-2">{Icons.mapPin}</p>
              <p className="text-white font-bold mb-1">Placement</p> */}
              <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-primary">{Icons.mapPin}</span>
              <h3 className="text-white font-bold text-x">Placement</h3>
              </div>
              <p className="text-gray-400 text-sm">à Amip Casa ou<br/>Technopark Rabat</p>
            </div>
          </div>

          {/* Note */}
          <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 p-6 rounded-xl">
            <p className="text-gray-400 text-sm leading-relaxed">
              <strong className="text-white">Note :</strong> Le timing de la formation peut être ajusté en fonction du rythme d'adaptation des participants, afin d'assurer de meilleures conditions d'apprentissage. Le formateur peut également être remplacé en cas de besoin, tout en garantissant la continuité et la qualité de la formation.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="tel:0624458847"
              className="inline-flex items-center gap-2 bg-primary text-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-110 shadow-2xl shadow-primary/30 animate-glow"
            >
              <span>Réserver maintenant</span>
              {Icons.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
