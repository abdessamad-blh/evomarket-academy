import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Planning from "@/components/Planning";
import Objective from "@/components/Objective";
import Trainers from "@/components/Trainers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Header />
      <Hero />
      <About />
      <Objective />
      <Planning />
      <Trainers />
      <Footer />
      {/* WhatsApp Floating Button */}
      <a
                href="https://wa.me/212751788358"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce z-50"
                aria-label="Chat on WhatsApp"
            >
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M20.52 3.48A11.75 11.75 0 0012.03 0C5.38 0 .02 5.37.02 12a11.9 11.9 0 001.64 6.03L0 24l6.22-1.63a11.9 11.9 0 005.81 1.5h.01c6.63 0 12.01-5.37 12.01-12 0-3.2-1.25-6.22-3.53-8.49zm-8.5 18.9h-.01a9.91 9.91 0 01-5.04-1.35l-.36-.21-3.7.97.99-3.6-.23-.38a9.93 9.93 0 01-1.53-5.3c0-5.45 4.45-9.89 9.94-9.89 2.64 0 5.12 1.03 6.98 2.9a9.83 9.83 0 012.9 6.98c0 5.45-4.45 9.88-9.94 9.88zm5.47-7.44c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.23-.24-.6-.49-.52-.67-.53-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.15 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35z" />
                </svg>
            </a>
    </main>
  );
}
