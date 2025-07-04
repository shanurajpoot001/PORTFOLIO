import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import React from 'react';

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const socialLinks = [
    { icon: <Github size={32} />, url: "https://github.com/shanurajpoot001", delay: 0 },
    { icon: <Linkedin size={32} />, url: "https://www.linkedin.com/in/shanu-pratap-rajpoot-36404425a", delay: 0.1 },
    { icon: <Instagram size={32} />, url: "https://www.instagram.com/sr_rajpoot_001?igsh=eTEycG5nbm9nMmJi", delay: 0.2 }
  ];

  return (
    <section className={darkMode ? "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden" : "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-20 relative overflow-hidden"}>
      {/* Navbar */}
      <nav className={"w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-xl text-emerald-600 dark:text-emerald-300">Portfolio</span>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a></li>
            <li><a href="/images/Screenshot 2025-07-04 142302.png" download className="hover:text-emerald-500 transition-colors">Resume</a></li>
            <li><a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a></li>
          </ul>
          {/* Social Icons */}
          <div className="flex space-x-4 ml-6">
            <a href="https://www.instagram.com/sr_rajpoot_001?igsh=eTEycG5nbm9nMmJi" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shanu-pratap-rajpoot?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/shanurajpoot001" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </nav>
      {/* Spacer for navbar */}
      <div className="h-16" />
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex-1 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Profile Image with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-72 h-72 rounded-full overflow-hidden border-8 border-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 shadow-xl relative"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 blur-2xl animate-pulse z-0" />
            <img 
              src="/images/WhatsApp Image 2025-06-09 at 16.21.33_22800b68.jpg"
              alt="Your Profile"
              className="w-full h-full object-cover relative z-10"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="mb-4 text-emerald-300 font-medium">👋 Hello, I'm</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
              Shanu Pratap Rajpoot
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-200">Full Stack MERN Developer <br/> (Software Engineer)</p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="hover:text-emerald-400 transition-transform duration-300 hover:scale-110"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + link.delay }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
              
              {/* Download Resume */}
              <motion.a
                href="/images/Screenshot 2025-07-04 142302.png"
                download
                className="flex items-center space-x-2 text-teal-200 hover:text-emerald-400 transition-transform duration-300 hover:scale-110"
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v6m0 0l-3-3m3 3l3-3m-6-9h6m-6 0a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2V5a2 2 0 00-2-2h-6z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
