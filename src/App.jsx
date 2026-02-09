import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 border-t border-white/5 bg-slate-950">
        <p>© {new Date().getFullYear()} Faith Jebet. 🎃.</p>
      </footer>
    </div>
  );
}

export default App;
