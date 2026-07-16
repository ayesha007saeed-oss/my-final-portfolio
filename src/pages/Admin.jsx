import React, { useState, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

export default function Admin() {
  const { projects, setProjects } = useContext(ProjectContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New States
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("React"); // Default
  const [newLiveLink, setNewLiveLink] = useState("");
  const [newGithubLink, setNewGithubLink] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddProject = () => {
    if (newTitle.trim() !== "") {
      const newProject = {
        id: Date.now(),
        title: newTitle,
        category: newCategory,
        liveLink: newLiveLink,
        githubLink: newGithubLink,
        description: newDescription,
        tags: ["New"], // Optional: default tag
        status: "Active"
      };
      
      setProjects([...projects, newProject]);
      
      // Reset Fields
      setNewTitle("");
      setNewCategory("React");
      setNewLiveLink("");
      setNewGithubLink("");
      setNewDescription("");
      setIsModalOpen(false);
    }
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-400">Welcome back, Ayesha.</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-all"
          >
            + Add New Project
          </button>
        </div>

        {/* Modal Form */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Project</h2>
              
              <input 
                type="text" placeholder="Project Title" value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 p-3 rounded-lg mb-3 text-white"
              />
              
              <select 
                value={newCategory} 
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 p-3 rounded-lg mb-3 text-white"
              >
                <option value="React">React</option>
                <option value="HTML/CSS">HTML/CSS</option>
                <option value="General">General</option>
              </select>

              <input 
                type="text" placeholder="Live Link (URL)" value={newLiveLink}
                onChange={(e) => setNewLiveLink(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 p-3 rounded-lg mb-3 text-white"
              />
              <input 
                type="text" placeholder="GitHub Link (URL)" value={newGithubLink}
                onChange={(e) => setNewGithubLink(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 p-3 rounded-lg mb-3 text-white"
              />
              <textarea 
                placeholder="Description" value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full bg-gray-950 border border-gray-700 p-3 rounded-lg mb-4 text-white"
              />

              <div className="flex gap-3">
                <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
                <button onClick={handleAddProject} className="bg-blue-600 px-6 py-2 rounded-lg text-white font-bold">Save</button>
              </div>
            </div>
          </div>
        )}

        {/* Projects Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b border-gray-800">
                <th className="p-4">Project Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                  <td className="p-4">{project.title}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      {project.status}
                    </span>
                  </td>
                  <td className="p-4 space-x-3">
                    <button onClick={() => deleteProject(project.id)} className="text-red-400 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}