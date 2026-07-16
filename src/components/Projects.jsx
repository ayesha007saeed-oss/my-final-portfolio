import React, { useState, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext'; // Context import kiya

export default function Projects() {
  // Global state se projects fetch karein
  const { projects } = useContext(ProjectContext);
  
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering Logic (Ab 'projects' variable use ho raha hai)
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gray-950 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">My Completed Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">Projects Showroom</h2>
        </div>

        {/* Dynamic Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {["All", "HTML/CSS", "React"].map((category) => (
            <button 
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`font-medium px-6 py-2.5 rounded-full border transition-all duration-300 active:scale-95 ${
                activeFilter === category 
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" 
                  : "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category || "General"}
                </span>
                <div className="flex space-x-3 text-xl text-gray-500">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="Git Repo">📁</a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" title="Live Site">🌐</a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{project.description}</p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags && project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-800 text-gray-300 text-xs font-medium px-3.5 py-1.5 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-gray-800 text-gray-200 font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:scale-[1.02] transition-all"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}