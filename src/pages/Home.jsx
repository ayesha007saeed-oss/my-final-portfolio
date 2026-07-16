import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="bg-gray-950 min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* 1. Hero / Main Introduction Section */}
      <Hero />

      {/* 2. Professional Experience Section (Education Removed) */}
      <section id="about" className="py-24 bg-gray-900 px-6 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section Heading */}
          <div className="text-center">
            <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">My Journey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">Work Experience</h2>
          </div>

          {/* Detailed Professional Work Timeline */}
          <div className="space-y-8">
            
            {/* Job 1: Nexe-Agent */}
            <div className="bg-gray-950 border border-gray-800 p-8 rounded-2xl hover:border-gray-700/70 transition-all duration-300 group">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Frontend Developer</h4>
                  <p className="text-gray-400 font-medium text-sm">Nexe-Agent</p>
                </div>
                <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                  May 2026 — June 2026
                </span>
              </div>
              <ul className="list-none space-y-2.5 text-gray-400 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Developing intelligent web applications with a focus on seamless frontend architecture and user experience[cite: 42].
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Building an AI-Powered Resume Builder using React.js, implementing dynamic data state management and real-time user input handling[cite: 43].
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Integrating AI features into web tools to enhance user interaction and efficiency[cite: 44].
                </li>
              </ul>
            </div>

            {/* Job 2: Aykays */}
            <div className="bg-gray-950 border border-gray-800 p-8 rounded-2xl hover:border-gray-700/70 transition-all duration-300 group">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Frontend Developer</h4>
                  <p className="text-gray-400 font-medium text-sm">Aykays</p>
                </div>
                <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                  March 2026 — May 2026
                </span>
              </div>
              <ul className="list-none space-y-2.5 text-gray-400 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Specializing in the development of responsive frontend interfaces for enterprise-level web applications[cite: 35].
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Collaborating with cross-functional teams to translate design concepts into clean, maintainable, and highly interactive UI components[cite: 36].
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1.5 text-xs">◆</span>
                  Optimizing frontend performance and cross-browser compatibility to ensure a seamless user experience[cite: 37].
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Tech Stack Grid Section */}
      <Skills />

      {/* 4. Live Showroom / Filterable Project Grid */}
      <Projects />

      {/* 5. Minimal Professional Contact Footer Section */}
      <section id="contact" className="py-20 bg-gray-950 px-6 border-t border-gray-900 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">Let's Connect</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Get In Touch</h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm pt-1">
              Currently seeking frontend developer roles and summer internship programs in Karachi, Pakistan.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-gray-300">
            <a href="mailto:ayesha007saeed@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-2 bg-gray-900 border border-gray-800 px-5 py-2.5 rounded-xl">
              📧 ayesha007saeed@gmail.com 
            </a>
            <span className="bg-gray-900 border border-gray-800 px-5 py-2.5 rounded-xl text-gray-400">
              📍 Malir, Karachi 
            </span>
          </div>
          
          <p className="text-xs font-mono text-gray-600 pt-8 border-t border-gray-900">
            © {new Date().getFullYear()} Ayesha. Crafted with React & Tailwind CSS. All Rights Reserved.
          </p>
        </div>
      </section>

    </div>
  );
}