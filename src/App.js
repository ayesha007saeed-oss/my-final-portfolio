import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context provider ko import karein
import { ProjectProvider } from './context/ProjectContext'; 

import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    // Yahan humne wrap kar diya hai
    <ProjectProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;