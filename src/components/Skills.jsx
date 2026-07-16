import React from 'react';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Bootstrap", "Vite"]
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase (Auth & Storage)"]
  },
  {
    title: "Programming Languages",
    skills: ["C# (Object-Oriented Programming)"]
  },
  {
    title: "Tools & Core Competencies",
    skills: ["Git", "GitHub", "Vercel", "UI/UX Design", "RESTful API Integration"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center">
          <p className="text-blue-400 font-mono tracking-widest text-sm uppercase">My Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-2">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-950 border border-gray-800 p-8 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-blue-400 tracking-wide font-mono uppercase text-sm">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-900 border border-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-xl hover:border-blue-500/30 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}