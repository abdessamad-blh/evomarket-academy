"use client";

const trainers = [
  {
    name: "B.MOUAD",
    title: "PhD en Marketing",
    role: "TRAINER",
    specialty: "Marketing Digital & Stratégie Meta",
    image: "PhD_B_MOUAD",
  },
  {
    name: "S.RACHID",
    title: "PhD & Comptable agréé",
    role: "TRAINER",
    specialty: "Juridique & Fiscal",
    image: "PhD_S_RACHID",
  },
  {
    name: "M.AYOUB",
    title: "Expert en Montage Vidéo",
    role: "TRAINER",
    specialty: "Montage & Post-Production",
    image: "M_AYOUB",
  },
  {
    name: "E.YOUNESS",
    title: "Filmmaker Professionnel",
    role: "TRAINER",
    specialty: "Production Vidéo & Lumière",
    image: "E_YOUNESS",
  },
];

export default function Trainers() {
  return (
    <section id="formateurs" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F4B223 1px, transparent 1px), linear-gradient(90deg, #F4B223 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            Notre Équipe
          </span>
          <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mt-6 mb-4">
            LES FORMATEURS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une équipe d'experts passionnés dédiés à votre réussite
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500">
                {/* Image Placeholder */}
                <div className="image-placeholder aspect-[3/4] relative overflow-hidden">
                  <span className="text-sm">TRAINER PHOTO<br/>{trainer.image}<br/>600x800px</span>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Role Badge */}
                  <div className="inline-block bg-primary text-dark px-3 py-1 rounded-full text-xs font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {trainer.role}
                  </div>

                  {/* Name */}
                  <h3 className="font-heading text-3xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {trainer.name}
                  </h3>

                  {/* Title */}
                  <p className="text-primary font-bold text-sm mb-2">
                    {trainer.title}
                  </p>

                  {/* Specialty */}
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {trainer.specialty}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="mt-20 max-w-5xl mx-auto animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Team Image Placeholder */}
            <div className="image-placeholder aspect-[16/9]">
              <span className="text-xl">FULL TEAM PHOTO<br/>1600x900px</span>
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
                  Une équipe d'<span className="text-primary">experts passionnés</span>
                </h3>
                <p className="text-gray-300 text-lg max-w-3xl">
                  Plus de 20 ans d'expérience combinée dans le marketing digital, la production vidéo, et la gestion d'entreprise. Nous sommes là pour partager notre expertise et vous accompagner vers le succès.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials or Video Section */}
        <div className="mt-20 max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl md:text-5xl text-white mb-4">
              TÉMOIGNAGES
            </h3>
            <p className="text-gray-400 text-lg">
              Découvrez l'expérience de nos anciens participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video Placeholder 1 */}
            <div className="video-placeholder aspect-video rounded-2xl">
              <span className="text-lg relative z-10">TESTIMONIAL VIDEO 1<br/>1280x720px</span>
            </div>

            {/* Video Placeholder 2 */}
            <div className="video-placeholder aspect-video rounded-2xl">
              <span className="text-lg relative z-10">TESTIMONIAL VIDEO 2<br/>1280x720px</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-400 mb-6 text-xl">Rejoignez notre prochaine session</p>
          <a
            href="tel:0624458847"
            className="inline-flex items-center gap-3 bg-primary text-dark px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all duration-300 hover:scale-110 shadow-2xl shadow-primary/30 animate-glow"
          >
            <span>Réserver maintenant</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
