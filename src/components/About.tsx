"use client";

export default function About() {
  return (
    <section id="formation" className="section-padding bg-gradient-to-b from-dark via-[#0f1428] to-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="image-placeholder aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
            src="/images/team-image.png"
            alt="Team image"
            className="absolute inset-0 w-full h-full object-cover "
          />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-dark p-4 rounded-xl shadow-xl animate-float">
              <p className="font-heading text-2xl">4</p>
              <p className="text-xs font-bold">Sessions<br/>Pratiques</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6 animate-fade-in">
            {/* Section Label */}
            <div className="inline-block">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                À Propos
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              DE <span className="text-primary">EVOMARKET</span> ACADEMY
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-primary">EvoMarket Academy</strong> est un centre de formation moderne, créé pour accompagner les professionnels, les entrepreneurs et les porteurs de projets dans le développement de leurs compétences digitales.
              </p>
              
              <p>
                Fondée par <strong className="text-white">Mouad Belahcen</strong>, PhD en Marketing et directeur de l'agence EvoMarket, l'académie a pour mission de rendre la communication digitale accessible, efficace et parfaitement adaptée aux exigences du marché actuel.
              </p>
              
              <div className="bg-white/5 border-l-4 border-primary p-6 rounded-r-xl backdrop-blur-sm">
                <p className="text-white font-semibold text-xl mb-2">Notre Vision</p>
                <p className="text-gray-300">
                  Former une nouvelle génération de professionnels capables de créer, gérer et optimiser leur présence en ligne sans dépendre d'agences ou de prestataires externes.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">100%</p>
                <p className="text-sm text-gray-400 mt-1">Pratique</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">2</p>
                <p className="text-sm text-gray-400 mt-1">Mois</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl text-primary">4</p>
                <p className="text-sm text-gray-400 mt-1">Experts</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="tel:0624458847"
                className="inline-flex items-center gap-2 bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Réserver votre place</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
