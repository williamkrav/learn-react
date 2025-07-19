import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PerformanceDemo from './pages/performance/PerformanceDemo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/performance" element={<PerformanceDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;