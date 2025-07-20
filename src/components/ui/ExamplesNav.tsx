import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ExamplesNav = () => {
  const examples = {
    'CSS Patterns': [
      { path: '/css/accordion', name: 'Accordion' },
      { path: '/css/gradients', name: 'Gradients' },
      { path: '/css/grid-and-flex', name: 'Grid and Flex' },
      { path: '/css/image-handling', name: 'Image Handling' },
      { path: '/css/loading-skeletons', name: 'Loading Skeletons' },
      { path: '/css/positions-and-display', name: 'Positions and Display' },
      { path: '/css/responsive-design', name: 'Responsive Design' },
      { path: '/css/transitions-and-animations', name: 'Transitions and Animations' },
    ],
    Performance: [
      { path: '/performance/optimization', label: 'React.memo & Hooks' },
      { path: '/performance/debounce', label: 'Debouncing & Throttling' },
      { path: '/performance/form-validation', label: 'Form Validation' },
    ],
    'State Management': [
      { path: '/state-management/context-example', label: 'Context API Example' },
      { path: '/state-management/zustand-example', label: 'Zustand Todo List' },
    ],
    'API Examples': [{ path: '/api/examples', label: 'API Calls (GET/POST)' }],
  };

  const location = useLocation();

  return (
    <nav className="p-4 bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(examples).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-lg font-semibold mb-3 text-gray-300">{category}</h2>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {item.label || item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ExamplesNav;
