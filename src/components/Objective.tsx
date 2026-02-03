"use client";

const Icons = {
  target: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  palette: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
    </svg>
  ),
  lightbulb: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  document: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  ),
  rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
};

const objectives = [
  {
    icon: Icons.target,
    title: "Autonomie Complète",
    description: "Développer une autonomie totale dans la création, la gestion et l'optimisation de votre communication digitale"
  },
  {
    icon: Icons.users,
    title: "Attirer Plus de Clients",
    description: "Attirer plus de clients/patients et renforcer votre notoriété professionnelle"
  },
  {
    icon: Icons.chart,
    title: "Performance",
    description: "Augmenter votre performance professionnelle grâce à une présence digitale optimisée"
  },
  {
    icon: Icons.palette,
    title: "Identité Visuelle",
    description: "Concevoir une identité visuelle cohérente et créer du contenu professionnel"
  },
  {
    icon: Icons.lightbulb,
    title: "Stratégie Publicitaire",
    description: "Comprendre la logique publicitaire sur Meta et maîtriser les campagnes digitales"
  },
  {
    icon: Icons.video,
    title: "Production Vidéo",
    description: "Maîtriser les bases techniques du tournage et du montage vidéo professionnel"
  },
  {
    icon: Icons.document,
    title: "Aspects Juridiques",
    description: "Comprendre et gérer efficacement l'aspect juridique, administratif et fiscal de votre activité"
  },
  {
    icon: Icons.rocket,
    title: "Indépendance",
    description: "Tout cela sans dépendre de prestataires externes"
  }
];

export default function Objective() {
  return (
    <section className="section-padding bg-gradient-to-b from-dark via-[#0f1428] to-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Notre Mission
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mt-6 mb-6">
            OBJECTIF
          </h2>
          <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
            L'objectif général de cette formation est de permettre aux <span className="text-primary font-bold">médecins, dentistes et entrepreneurs</span> de développer une autonomie complète dans la création, la gestion et l'optimisation de leur communication digitale.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {objective.icon}
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                  {objective.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {objective.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Benefit 1 */}
          <div className="bg-gradient-to-r from-primary/10 via-transparent to-transparent border-l-4 border-primary p-8 rounded-r-2xl backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
              <span className="text-primary">✓</span>
              Formation Complète & Pratique
            </h3>
            <p className="text-gray-300 leading-relaxed">
              La formation vise à fournir les compétences essentielles pour concevoir une identité visuelle cohérente, créer du contenu professionnel, comprendre la logique publicitaire sur Meta, et maîtriser les bases techniques du tournage et du montage vidéo.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gradient-to-r from-accent/10 via-transparent to-transparent border-l-4 border-accent p-8 rounded-r-2xl backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
              <span className="text-accent">✓</span>
              Module Juridique Spécialisé
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Un module animé par un comptable agréé permet aux participants de comprendre et gérer efficacement l'aspect juridique, administratif et fiscal de leur activité, afin d'éviter les erreurs courantes et de sécuriser leur structure professionnelle.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gradient-to-r from-blue-500/10 via-transparent to-transparent border-l-4 border-blue-500 p-8 rounded-r-2xl backdrop-blur-sm">
            <h3 className="text-white font-bold text-2xl mb-4 flex items-center gap-3">
              <span className="text-blue-500">✓</span>
              Accompagnement Continu
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Mode présentiel avec des séances en ligne supplémentaires pour correction, Q&A et accompagnement personnalisé. Vous ne serez jamais seul dans votre apprentissage.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <p className="text-gray-400 mb-6 text-lg">Prêt à transformer votre communication digitale ?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:0624458847"
              className="bg-primary text-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-110 shadow-2xl shadow-primary/30"
            >
              06 24 45 88 47
            </a>
            <a
              href="tel:0537705911"
              className="border-2 border-primary text-primary px-10 py-5 rounded-full font-bold text-xl hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110"
            >
              05 37 70 59 11
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
