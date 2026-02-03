"use client";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 image-placeholder">
        <span className="text-xl">HERO BACKGROUND IMAGE<br/>1920x1080px</span>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/90"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
            <span className="text-white block mb-2">DE L'IDÉE À</span>
            <span className="text-white block mb-2">LA VISIBILITÉ</span>
            <span className="text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl italic block" style={{ fontFamily: 'cursive' }}>
              Formation
            </span>
          </h1>

          {/* Subtitle with animation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-2xl sm:text-3xl md:text-4xl font-heading text-gray-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span>Marketing</span>
            <span>Accounting</span>
            <span>Editing</span>
            <span>Filming</span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Maîtrisez la communication digitale de A à Z en seulement 4 sessions pratiques
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="tel:0624458847"
              className="bg-primary text-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/50"
            >
              Réserver maintenant
            </a>
            <a
              href="tel:0537705911"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-110"
            >
              Contactez-nous
            </a>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-2 text-gray-400 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm sm:text-base">📞 06 24 45 88 47 / 05 37 70 59 11</p>
            <p className="text-sm sm:text-base">📧 evomarketagency@gmail.com</p>
            <p className="text-sm sm:text-base">🌐 www.evomarket.ma</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
