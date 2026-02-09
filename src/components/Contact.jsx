import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Facebook, MessageCircle, Music2 } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      link: 'https://www.linkedin.com/in/faith-jebet-351b40304/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      link: 'https://www.instagram.com/faithjebetkiprono/',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={24} />,
      link: 'https://www.facebook.com/profile.php?id=100086648104998',
      color: 'hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      link: 'https://wa.me/+254796247595',
      color: 'hover:text-green-500',
    },
    {
      name: 'TikTok',
      icon: <Music2 size={24} />,
      link: 'https://www.tiktok.com/@jebetfaith5',
      color: 'hover:text-slate-100',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out to me on any of these platforms!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`p-4 rounded-2xl bg-slate-800/50 border border-white/5 transition-colors flex flex-col items-center min-w-[100px] ${social.color}`}
            >
              {social.icon}
              <span className="block mt-2 text-xs font-medium text-slate-400">{social.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="bg-slate-800/40 p-10 rounded-3xl border border-white/5 max-w-2xl mx-auto backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-white text-left">Send a Message</h3>
          
          <form 
            action="https://formspree.io/f/mqedazly" 
            method="POST"
            className="space-y-6 text-left"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
            >
              Send Message
            </motion.button>

            <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-slate-500">
              <Mail size={16} />
              <span className="text-sm">Or email directly at faithjebetkiprono@gmail.com</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
