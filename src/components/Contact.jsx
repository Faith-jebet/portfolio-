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
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto">
          I'm always open to new opportunities and collaborations. 
          Feel free to reach out to me on any of these platforms!
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className={`p-4 rounded-2xl bg-slate-800/50 border border-white/5 transition-colors ${social.color}`}
            >
              {social.icon}
              <span className="block mt-2 text-xs font-medium text-slate-400">{social.name}</span>
            </motion.a>
          ))}
        </div>

        <div className="bg-slate-800/40 p-8 rounded-3xl border border-white/5 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Send a direct message</h3>
          <a
            href="mailto:faithjebet@example.com"
            className="inline-flex items-center gap-3 text-2xl font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <Mail size={28} />
            faithjebet@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
