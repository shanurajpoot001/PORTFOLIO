import React from 'react';

const liveProjects = [
  {
    name: 'Signature App',
    url: 'https://signature-app-git-main-shanurajpoot001s-projects.vercel.app',
    description: 'Create, save, and download your digital signature.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80' // pen and signature
  },
  {
    name: 'Weather App',
    url: 'https://weather-app-git-main-shanurajpoot001s-projects.vercel.app',
    description: 'Check real-time weather for any city.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' // clouds/weather
  },
  {
    name: 'TODO List',
    url: 'https://todo-2-git-main-shanurajpoot001s-projects.vercel.app',
    description: 'Organize your daily tasks efficiently.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' // checklist
  },
  {
    name: 'Booking Dashboard',
    url: 'https://booking-dashboard.onrender.com/',
    description: 'Book rooms, explore trending places, and manage your bookings.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' // travel/hotel
  }
];

export default function LiveProjects({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="live-projects" className={darkMode ? 'py-20 bg-gray-900' : 'py-20 bg-emerald-50'}>
      <div className="container mx-auto px-4">
        <h2 className={darkMode ? 'text-4xl font-bold text-center mb-12 text-emerald-300' : 'text-4xl font-bold text-center mb-12 text-emerald-800'}>
          Live Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {liveProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                'block rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ' +
                (darkMode
                  ? 'bg-gray-800 text-white hover:bg-emerald-900'
                  : 'bg-white text-gray-900 hover:bg-emerald-100')
              }
            >
              <img src={project.image} alt={project.name + ' image'} className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <span className="text-emerald-500 underline">Visit Project</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 