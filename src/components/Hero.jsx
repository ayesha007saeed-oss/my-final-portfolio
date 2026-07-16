import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6 pt-16">
      <div className="max-w-4xl text-center space-y-8">
        
        {/* Small Tagline/Badge */}
        <p className="text-blue-500 font-mono tracking-widest text-xs md:text-sm uppercase font-semibold">
          WELCOME TO MY SPACE
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Building High-Performance <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400">
            Frontend Experiences
          </span>
        </h1>

        {/* Your Real Professional Intro from Resume */}
        <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
          I'm <span className="text-white font-semibold">Ayesha</span>, an ambitious Computer Science student at DHA Suffa University and a passionate Frontend Developer. I specialize in building responsive, user-centric web applications with a strong focus on clean code, aesthetic UI/UX design, and dark mode aesthetics.
        </p>

        {/* Action Buttons (Explore & Download CV) */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          
          {/* Primary Explore button */}
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-md shadow-blue-600/10 text-sm md:text-base"
          >
            Explore My Work
          </a>
          
          {/* Your Custom Direct CV Download Button */}
          <a 
            href="/Ayesha_Resume.pdf" 
            download="Ayesha_Resume.pdf" 
            className="border border-gray-800 bg-gray-900/40 hover:bg-gray-900 text-gray-200 font-medium px-8 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 hover:border-gray-700 text-sm md:text-base"
          >
            <span>Download CV</span>
            <svg 
              className="w-4 h-4 text-blue-400" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
          
        </div>

      </div>
    </section>
  );
}