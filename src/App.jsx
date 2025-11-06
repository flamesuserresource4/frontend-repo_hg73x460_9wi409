import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} FlameStudio. All rights reserved.</p>
        <div className="text-sm text-slate-600">Dibangun dengan Next.js mindset, TypeScript, dan Tailwind.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
