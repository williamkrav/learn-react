import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ExamplesLayout from './components/layout/ExamplesLayout';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load example pages
const ResponsiveDesign = React.lazy(() => import('./pages/css-patterns/ResponsiveDesign'));
const GridAndFlex = React.lazy(() => import('./pages/css-patterns/GridAndFlex'));
const PositionsAndDisplay = React.lazy(() => import('./pages/css-patterns/PositionsAndDisplay'));
const TransitionsAndAnimations = React.lazy(
  () => import('./pages/css-patterns/TransitionsAndAnimations')
);
const LoadingSkeletons = React.lazy(() => import('./pages/css-patterns/LoadingSkeletons'));
const DebouncingAndThrottling = React.lazy(
  () => import('./pages/performance/DebouncingAndThrottling')
);
const PerformanceDemo = React.lazy(() => import('./pages/performance/PerformanceDemo'));
const FormValidation = React.lazy(() => import('./pages/performance/FormValidation'));
const Gradients = React.lazy(() => import('./pages/css-patterns/Gradients'));
const ContextApiExample = React.lazy(() => import('./pages/state-management/ContextApiExample'));
const ZustandExample = React.lazy(() => import('./pages/state-management/ZustandExample'));
const ImageHandling = React.lazy(() => import('./pages/css-patterns/ImageHandling'));
const ApiExamples = React.lazy(() => import('./pages/api-examples/ApiExamples'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-100">
          <Navbar />
          <React.Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* Examples routes */}
              <Route path="/" element={<ExamplesLayout />}>
                <Route path="css/responsive" element={<ResponsiveDesign />} />
                <Route path="css/grid-flex" element={<GridAndFlex />} />
                <Route path="css/positions" element={<PositionsAndDisplay />} />
                <Route path="css/transitions" element={<TransitionsAndAnimations />} />
                <Route path="css/skeletons" element={<LoadingSkeletons />} />
                <Route path="css/gradients" element={<Gradients />} />
                <Route path="css/images" element={<ImageHandling />} />
                <Route path="performance/optimization" element={<PerformanceDemo />} />
                <Route path="performance/debounce" element={<DebouncingAndThrottling />} />
                <Route path="performance/form-validation" element={<FormValidation />} />
                <Route path="state-management/context-example" element={<ContextApiExample />} />
                <Route path="state-management/zustand-example" element={<ZustandExample />} />
                <Route path="api/examples" element={<ApiExamples />} />
              </Route>
            </Routes>
          </React.Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
