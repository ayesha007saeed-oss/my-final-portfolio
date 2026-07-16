import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

// Yahan apne purane projects ko ek variable mein store kar lein
const initialProjects = [
  {
    id: 1,
    category: "React",
    title: "AI Summarizer",
    description: "An advanced, AI-powered content summarization platform...",
    tags: ["React.js", "Tailwind CSS", "Vite", "API Integration"],
    liveLink: "https://ai-summarizer-murex.vercel.app/login",
    githubLink: "https://github.com/ayesha007saeed-oss/ai-summarizer"
  },
  {
    id: 2,
    category: "React",
    title: "Resume Summarizer",
    description: "An intelligent web tool engineered to parse and extract...",
    tags: ["React.js", "Tailwind CSS", "Vite", "Text Parsing"],
    liveLink: "https://resume-summarizer-wwon.vercel.app/",
    githubLink: "https://github.com/ayesha007saeed-oss/resume-summarizer"
  },
  {
    id: 3,
    category: "React",
    title: "Task Flow",
    description: "A high-performance project and task management application...",
    tags: ["React.js", "Tailwind CSS", "Firebase", "Authentication"],
    liveLink: "https://task-flow-chi-nine.vercel.app/login",
    githubLink: "https://github.com/ayesha007saeed-oss/task-flow"
  },
  {
    id: 4,
    category: "HTML/CSS",
    title: "Lumina Real Estate",
    description: "A premium, ultra-sleek architectural showcase landing page...",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "https://lumina-real-estate-tau.vercel.app/",
    githubLink: "https://github.com/ayesha007saeed-oss/lumina-real-estate"
  }
];

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("myPortfolioProjects");
    // Agar localStorage mein data saved hai toh wo load karo, 
    // warna "initialProjects" (aapke purane wale) load kar do
    return saved ? JSON.parse(saved) : initialProjects;
  });

  useEffect(() => {
    localStorage.setItem("myPortfolioProjects", JSON.stringify(projects));
  }, [projects]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};