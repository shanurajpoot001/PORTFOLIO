import React from 'react';

const internships = [
  {
    company: 'Gen AI & Intern',
    org: 'Microsoft / Edunet Foundation',
    duration: 'May 2025 – June 2025',
    location: 'Virtual',
    description: 'AI, ML, and DL foundational concepts, Azure-based practical demos.'
  },
  {
    company: 'IT MERN Stack Developer Intern',
    org: 'Edunet Foundation',
    duration: 'Dec 2024 – Jan 2025',
    location: 'Virtual',
    description: 'Real-time collaboration and MERN stack development, enhancing user engagement and communication.'
  },
  {
    company: 'IT MERN Stack Developer Intern',
    org: 'Codevocad',
    duration: 'Nov 2024 – Jan 2025',
    location: 'Virtual',
    description: 'Developed React components, improved frontend performance, and contributed to open-source projects.'
  },
  {
    company: 'Cybersecurity Intern (CCNA Certified)',
    org: 'Cisco Networking Academy',
    duration: 'May 2024 – Jul 2024',
    location: 'Virtual',
    description: 'Completed CCNA certification, focused on cybersecurity and networking, participated in simulated cyberattack drills.'
  },
  {
    company: 'AI Intern',
    org: 'Internship Studio',
    duration: 'May 2024 – June 2024',
    location: 'Virtual',
    description: 'Completed a certified internship in Artificial Intelligence, enhanced understanding of intelligent system design.'
  }
];

export default function Internship({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="internship" className={darkMode ? 'py-16 bg-gray-900' : 'py-16 bg-emerald-50'}>
      <div className="container mx-auto px-4">
        <h2 className={darkMode ? 'text-3xl font-bold text-center mb-8 text-emerald-300' : 'text-3xl font-bold text-center mb-8 text-emerald-800'}>
          Internships
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {internships.map((item, idx) => (
            <div key={idx} className={darkMode ? 'bg-gray-800 text-white rounded-xl p-6 shadow-lg' : 'bg-white text-gray-900 rounded-xl p-6 shadow-lg'}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div className="font-semibold text-lg">{item.company} <span className="text-emerald-500">@ {item.org}</span></div>
                <div className="text-sm text-gray-400 md:text-right">{item.duration} | {item.location}</div>
              </div>
              <div className="text-base mt-1">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 