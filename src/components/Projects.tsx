import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform built with MERN stack, featuring user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://project.com"
  },
  {
    title: "Hotel Booking Website",
    description: "Real-Hotel's and Room booking application with collaborative features and drag-and-drop functionality.",
    image: "https://th.bing.com/th/id/OIP.0DH7WJ8ogrDsHLbQmqhS1AHaEs?w=313&h=199&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://project.com"
  },
  {
    title: "Real-time Chat Application",
    description: "Real-time chat and interaction  application with collaborative features and drag-and-drop functionality.",
    image: "data:image/jpeg;base64,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ZSIS5r+gNJ6dbA9vZU/PcSm4hUl5DxTIXq76BZLcpTzGavYr9Qa7bdDet7cDvt3BBHeU5dkmZbw5t5OIFgu1cXOWg78tz7UIezY+h2PyQXzeu57D8ewRc0wnCv4w4zGZTk969YksU65pU683kVadMRtELWtAPzEAOPp699nufiJmT4DyPBY9t+1c41n5vhYorb+uSnYLmsBafQaLmkkAbBPbbQUHT0REBERAREQEREBERAREQEREBERB8vax7XMe0Oa4FrmuALXNI0QQe2lzfkHh48vfc4+5rfm8x1CR/QGuB3urKfT8Gk/ZwHYdKXi3W80ncJ5Mdckas5BW5nzLj7xUysL5gz5QzKxvjn0D+pYH6X3PV91Nx+KFUjcuHna7/hWo3tP5uY0/uXQZYYJ2GOeKOWM+rJWNew/drgQoqTi3EpXdT8HiyT66qxN/c0AKnPHPuqHVlr8b+P8AVHueKNgt6aWMrwvPYPuWDL6+mo42s/8AZRkeM57zKaKa4ZmVQQ5k95hr1IgfevWADnHXuG9/dy6pVw2ColrqeMoV3N9Hw1oWP/8AIN6v3rfTsrX4Q70Wv+y23P5vDHGGvE2vk7rLTWASSzMilhkf7u8poaR+Gn/t9TP8UxOXwePmxt6WvNHDZkkpS1y/Rhl+dzHMkAIId1H1Pr+CsSKdslrRqZVrhpSeVY05e647gvMc9byUU38BcmeyeO7HG54hsBzpC14b37FzwR66II36KUzvO8DPj7dDAzOyeWyFaxXqw1YpdR9cbg6aV72tADBtx+3sNlt4mgr2I3w2IYpoXjT45mNkjcPo5rwR+5a1bFYen5vweOo1vNaWS/DVoIvMaf1X9DRsLCqreF380aP/AFd//NKpvAeUVePjLwZZk0OKu5KU177YnvgiuMYOuKXoBPdvQR29vodt7FWq06cTYKleCvA0ucIq8TIowXHZIZGAO/v2VF8O8TagxOfq5fGyxtsZmaUQZCsQJYjFGA7ombojt9EGry3meLy2Ol4/xtz8nk8xqoBWikDIonEF5LpGjZI7duwBJJHT82zynGnD+Gk+Mc4OfTqYqGVzd9Lpfi4XSFu/bZOldquNxNAvNGhSql/Z5qV4YS4f0vLaFA8+q3LvFM1Vp1p7NiU0vLhrRulld02onnTGAnsASfsgheMc6wdbEYzHZ2V2MyFGlVh6bUMvRYriIeTPE5jSNOb0n2/DY7rQtXxz3lXHYcTFK/Ccds/HXLz43sjmkD45OhoePfpDWg6J6nHWm7V2xmJoWcHxuHKY2tNLWxWPidHerRSPhe2uxrmalaSCD2Kl4K9atE2GtBFBCz9COBjI42/1WsAH7kGVERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://project.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media metrics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    live: "https://project.com"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          ref={ref}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-900 text-purple-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}