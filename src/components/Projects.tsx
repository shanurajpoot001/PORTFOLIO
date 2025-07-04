import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AgriAssist: AI-Driven Agricultural Advisory Platform",
    description: "Engineered a comprehensive agricultural assistant platform utilizing the MERN stack and OpenAI's GPT models to provide farmers with real-time insights into crop health, soil conditions, and pest management.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80", // close-up of crops/agriculture
    technologies: ["MERN Stack", "OpenAI", "ChatGPT", "AI"],
    github: "https://github.com/shanurajpoot001/AgriAssist",
    live: "#"
  },
  {
    title: "AI-Enhanced Interview Preparation Dashboard",
    description: "Developed a dynamic full-stack platform integrating OpenAI's GPT models to generate personalized interview questions and provide real-time feedback. Includes dashboard for tracking preparation, Q&A sessions, and actionable insights.",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80", // interview/handshake
    technologies: ["MERN Stack", "OpenAI API", "Prompt Engineering", "AI Tool"],
    github: "https://github.com/shanurajpoot001/InterviewDashboard",
    live: "#"
  },
  {
    title: "Gmail Clone with AI Enhancements",
    description: "Replicated core functionalities of Gmail, including threaded conversations, label management, and secure user authentication. Integrated OpenAI for smart suggestions and enhanced productivity.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", // email/inbox/letter
    technologies: ["MERN Stack", "OpenAI API", "Prompt Engineering"],
    github: "https://github.com/shanurajpoot001/GmailCloneAI",
    live: "#"
  },
  {
    title: "Hotel and Resort Listing Platform",
    description: "Designed a comprehensive hotel booking system featuring dynamic property listings, real-time availability checks, and secure payment processing via Stripe. Implemented user dashboards for booking history, reviews, and cancellations.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // hotel/resort
    technologies: ["MERN Stack", "OpenAI"],
    github: "https://github.com/shanurajpoot001/HotelBookingPlatform",
    live: "#"
  },
  {
    title: "Voice Assistant (Python)",
    description: "Developed a Python-based voice assistant capable of recognizing speech, executing commands, and providing voice responses. Features include web search, weather updates, and more. (Deployment coming soon)",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // microphone/voice assistant
    technologies: ["Python", "Speech Recognition", "Text-to-Speech", "AI"],
    github: "https://github.com/shanurajpoot001/VoiceAssistant",
    live: "#" // Coming soon
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
              <img src={project.image} alt={project.title + ' image'} className="w-full h-32 object-cover rounded-lg mb-4" />
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