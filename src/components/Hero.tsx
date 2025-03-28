import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: <Github size={32} />, url: "https://github.com/shanurajpoot001", delay: 0 },
    { icon: <Linkedin size={32} />, url: "https://www.linkedin.com/in/shanu-pratap-rajpoot-36404425a", delay: 0.1 },
    { icon: <Mail size={32} />, url: "mailto:gamersr265@email.com", delay: 0.2 }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="w-72 h-72 rounded-full overflow-hidden border-8 border-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 shadow-xl"
          >
            <img 
              src="/images/WhatsApp Image 2025-03-28 at 22.33.53_b43a14fb.jpg"
              alt="Your Profile"
              className="w-full h-full object-cover"
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
            <p className="text-xl md:text-2xl mb-8 text-teal-200">MERN Stack And UI/UX Developer <br/> (Software Engineer)</p>

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
                >
                  {link.icon}
                </motion.a>
              ))}
              
              {/* Download Resume */}
              <motion.a
                href="/path-to-your-resume.pdf"
                download
                className="flex items-center space-x-2 text-teal-200 hover:text-emerald-400 transition-transform duration-300 hover:scale-110"
              >
                <span>Download Resume</span>
                <svg xmlns="public/images/RESUME-2025.pdf" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
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
