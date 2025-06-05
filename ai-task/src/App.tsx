import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import './styles/navbar.css';

// Lazy load route components
const Task1 = React.lazy(() => import('./pages/Task1').then(module => ({ default: module.Task1 })));
const Task2 = React.lazy(() => import('./pages/Task2').then(module => ({ default: module.Task2 })));
const Task3 = React.lazy(() => import('./pages/Task3').then(module => ({ default: module.Task3 })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-[calc(100vh-64px)]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <nav className="nav">
          <button
            className="hamburger"
            id="menuBtn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`} id="menu">
            <li><Link to="/task1">Task 1</Link></li>
            <li><Link to="/task2">Task 2</Link></li>
            <li><Link to="/task3">Task 3</Link></li>
          </ul>
        </nav>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/task1" element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/" element={<Navigate to="/task1" replace />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
