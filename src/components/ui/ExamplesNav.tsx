import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const examples = {
  'CSS Patterns': [
    { path: '/css/responsive', label: 'Responsive Design' },
    { path: '/css/grid-flex', label: 'Grid & Flexbox' },
    { path: '/css/positions', label: 'Positions & Display' },
    { path: '/css/transitions', label: 'Transitions & Animations' },
    { path: '/css/skeletons', label: 'Loading Skeletons' },
  ],
  'Performance': [
    { path: '/performance/optimization', label: 'React.memo & Hooks' },
    { path: '/performance/debounce', label: 'Debouncing & Throttling' },
  ]
};

function ExamplesNav() {
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
                      {item.label}
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
}

export default ExamplesNav; 