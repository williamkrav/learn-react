import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PerformanceDemo from './pages/performance/PerformanceDemo';
import ExamplesLayout from './components/layout/ExamplesLayout';

// Lazy load example pages
const ResponsiveDesign = React.lazy(() => import('./pages/css-patterns/ResponsiveDesign'));
const GridAndFlex = React.lazy(() => import('./pages/css-patterns/GridAndFlex'));
const PositionsAndDisplay = React.lazy(() => import('./pages/css-patterns/PositionsAndDisplay'));
const TransitionsAndAnimations = React.lazy(() => import('./pages/css-patterns/TransitionsAndAnimations.tsx'));
const LoadingSkeletons = React.lazy(() => import('./pages/css-patterns/LoadingSkeletons.tsx'));
const DebouncingAndThrottling = React.lazy(() => import('./pages/performance/DebouncingAndThrottling.tsx'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/performance" element={<PerformanceDemo />} />
            
            {/* Examples routes */}
            <Route path="/" element={<ExamplesLayout />}>
              <Route path="css/responsive" element={<ResponsiveDesign />} />
              <Route path="css/grid-flex" element={<GridAndFlex />} />
              <Route path="css/positions" element={<PositionsAndDisplay />} />
              <Route path="css/transitions" element={<TransitionsAndAnimations />} />
              <Route path="css/skeletons" element={<LoadingSkeletons />} />
              <Route path="interactions/debounce" element={<DebouncingAndThrottling />} />
            </Route>
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App; 