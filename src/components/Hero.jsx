import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu } from 'lucide-react';
import projectsData from '../data/projects.json';

const Hero = () => {
  const { profile } = projectsData;

  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-sky-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {profile.image && (
            <div className="mb-8 relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 shadow-2xl"
              />
            </div>
          )}
          <div className="block">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
              <Cpu size={16} /> {profile.role}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Crafting intelligent solutions through modern web technologies and AI. 
            Specializing in high-performance applications that bridge the gap between 
            users and intelligent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-slate-900/50 hover:bg-slate-800 text-slate-300 px-8 py-4 rounded-full font-semibold border border-white/10 transition-all"
            >
              <Code2 size={20} /> Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
