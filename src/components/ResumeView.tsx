import React from 'react';

export default function ResumeView({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 flex flex-col items-center justify-center py-8' : 'min-h-screen bg-emerald-50 flex flex-col items-center justify-center py-8'}>
      <h1 className={darkMode ? 'text-3xl font-bold mb-6 text-emerald-300' : 'text-3xl font-bold mb-6 text-emerald-800'}>My Resume</h1>
      <div className="w-full max-w-3xl h-[80vh] mb-6">
        <iframe
          src="/RESUME-2025.pdf"
          title="Resume PDF"
          className="w-full h-full rounded-lg shadow-lg border"
        />
      </div>
      <a
        href="/RESUME-2025.pdf"
        download
        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg"
      >
        Download PDF
      </a>
    </div>
  );
} 