import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Globe className="w-8 h-8" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Redux", "Next.js"]
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8" />,
    items: ["Node.js", "Express", "REST APIs", "GraphQL"]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    items: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"]
  },
  {
    category: "Tools & Others",
    icon: <Code2 className="w-8 h-8" />,
    items: ["Git", "Docker", "AWS", "CI/CD", "Jest"]
  }
];

const skillLevels: { [key: string]: number } = {
  "React": 90,
  "TypeScript": 85,
  "Tailwind CSS": 80,
  "Redux": 75,
  "Next.js": 70,
  "Node.js": 85,
  "Express": 80,
  "REST APIs": 80,
  "GraphQL": 65,
  "MongoDB": 80,
  "PostgreSQL": 70,
  "Redis": 60,
  "Mongoose": 75,
  "Git": 90,
  "Docker": 70,
  "AWS": 60,
  "CI/CD": 65,
  "Jest": 70
};

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className={darkMode ? "py-20 bg-gray-900 relative overflow-hidden" : "py-20 bg-white relative overflow-hidden"}>
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366F1" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-indigo-900"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className={darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl" : "bg-gradient-to-br from-white to-indigo-50 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex items-center mb-4 text-indigo-600"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {skill.icon}
                <h3 className="text-xl font-semibold ml-2">{skill.category}</h3>
              </motion.div>
              <ul className="space-y-2 mt-4">
                {skill.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item} 
                    className="flex flex-col"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                  >
                    <div className="flex items-center text-gray-700 dark:text-gray-200">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                      {item}
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <motion.div
                        className="bg-indigo-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: skillLevels[item] + '%' }}
                        transition={{ duration: 1, delay: 0.2 + itemIndex * 0.1 }}
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

