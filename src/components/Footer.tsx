"use client";

const Icons = {
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  location: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-dark to-[#050714] border-t border-primary/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/images/evologo.png"
                alt="EvoMarket Logo"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-heading text-3xl text-primary">EVOMARKET</h3>
                <p className="text-sm text-gray-400 -mt-1">Academy</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formation pratique en communication digitale pour les professionnels et entrepreneurs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('formation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Formation
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('planning')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('formateurs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Formateurs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">{Icons.phone}</span>
                <div>
                  <a href="tel:0624458847" className="hover:text-primary transition-colors">06 24 45 88 47</a>
                  <br />
                  <a href="tel:0537705911" className="hover:text-primary transition-colors">05 37 70 59 11</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">{Icons.email}</span>
                <a href="mailto:evomarketagency@gmail.com" className="hover:text-primary transition-colors break-all">
                  evomarketagency@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">{Icons.globe}</span>
                <a href="https://www.evomarket.ma" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.evomarket.ma
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">{Icons.location}</span>
                <span>Amip Casa, Casablanca</span>
              </li>
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-heading text-xl text-white mb-6">Suivez-nous</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/academy.evomarket/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 hover:text-primary"
                aria-label="Instagram"
              >
                {Icons.instagram}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 hover:text-primary"
                aria-label="Facebook"
              >
                {Icons.facebook}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 text-gray-400 hover:text-primary"
                aria-label="LinkedIn"
              >
                {Icons.linkedin}
              </a>
            </div>
            <a
              href="tel:0624458847"
              className="inline-block w-full text-center bg-primary text-dark px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              Réserver
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © 2025 <span className="text-primary">EvoMarket Academy</span>. Tous droits réservés.
          </p>
          <p className="text-center">
            Développé avec passion par{" "}
            <a href="https://www.evomarket.ma" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              EvoMarket Digital Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
