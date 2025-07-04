import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Coffee, Users } from 'lucide-react';

export default function About({ darkMode }: { darkMode: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: <Coffee className="w-6 h-6" />, value: "1000+", label: "Coffee Cups" },
    { icon: <BookOpen className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, value: "30+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, value: "5+", label: "Years Experience" }
  ];

  return (
    <section className={darkMode ? "py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden" : "py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"}>
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2310B981" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-8 text-emerald-900"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            About Me
          </motion.h2>

          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Hello! I'm Shanu Pratap Rajpoot, a Full Stack MERN Developer passionate about building scalable web applications and AI-powered solutions.
              </p>
              <p className="mb-4">
                I have completed 4+ internships at top EdTech and IT companies, am CCNA certified by Cisco Networking Academy, and have hands-on experience in AI, Machine Learning, and cloud technologies.
              </p>
              <p className="mb-4">
                I love contributing to open source, learning new technologies, and solving real-world problems with code. Currently, I am open for new opportunities and collaborations.
              </p>
              <p>
                Let's connect and build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Remove the stats grid below */}
        </motion.div>
      </div>
    </section>
  );
}