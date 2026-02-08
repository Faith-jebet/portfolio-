import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Database, BrainCircuit, Box } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Globe className="text-sky-400" />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="text-cyan-400" />,
      skills: ['React Native'],
    },
    {
      title: 'AI & Data',
      icon: <BrainCircuit className="text-blue-400" />,
      skills: ['Python', 'AI Engineering', 'Machine Learning'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Skillset</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/40 border border-white/5 hover:border-sky-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-100">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-slate-900/50 text-slate-400 rounded-lg border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
