import React, { useState } from 'react';
import Card from '../../components/ui/Card';

function PositionsAndDisplay() {
  const [selectedPosition, setSelectedPosition] = useState('relative');

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Positions & Display Properties</h1>
        <p className="text-gray-400">
          Learn about CSS positioning and display properties with interactive examples.
        </p>
      </header>

      {/* Position Properties */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Position Properties</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Position</label>
              <select
                className="w-full md:w-auto bg-gray-700 border-gray-600 rounded p-2"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                <option value="static">static</option>
                <option value="relative">relative</option>
                <option value="absolute">absolute</option>
                <option value="fixed">fixed</option>
                <option value="sticky">sticky</option>
              </select>
            </div>

            <div className="relative bg-gray-700 h-64 rounded overflow-auto p-4">
              <div className="mb-32 text-gray-400">
                Scroll this container to see how different positions behave
              </div>
              <div
                className={`
                  w-24 h-24 bg-blue-500 rounded flex items-center justify-center
                  ${selectedPosition === 'sticky' ? 'top-4' : 'top-8 left-8'}
                `}
                style={{ position: selectedPosition as any }}
              >
                {selectedPosition}
              </div>
              <div className="mt-64 text-gray-400">
                More content to enable scrolling...
              </div>
            </div>

            <div className="bg-gray-700 rounded p-4">
              <code className="text-sm">
                {`position: ${selectedPosition};
${selectedPosition !== 'static' ? 'top: 8px;\nleft: 8px;' : ''}`}
              </code>
            </div>
          </div>
        </Card>
      </section>

      {/* Display Properties */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Display Properties</h2>
        
        {/* Block vs Inline vs Inline-Block */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Block vs Inline vs Inline-Block</h3>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <p className="mb-2 text-sm text-gray-400">Display: block</p>
              <div className="block bg-blue-500 p-2 mb-2">Block 1</div>
              <div className="block bg-blue-600 p-2">Block 2</div>
            </div>

            <div className="bg-gray-700 p-4 rounded">
              <p className="mb-2 text-sm text-gray-400">Display: inline</p>
              <span className="inline bg-green-500 p-2">Inline 1</span>
              <span className="inline bg-green-600 p-2">Inline 2</span>
            </div>

            <div className="bg-gray-700 p-4 rounded">
              <p className="mb-2 text-sm text-gray-400">Display: inline-block</p>
              <div className="inline-block bg-purple-500 p-2 m-2">Inline-block 1</div>
              <div className="inline-block bg-purple-600 p-2 m-2">Inline-block 2</div>
            </div>
          </div>
        </Card>

        {/* Z-Index and Stacking */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Z-Index and Stacking</h3>
          <div className="relative h-48 bg-gray-700 rounded">
            <div className="absolute top-4 left-4 w-32 h-32 bg-blue-500 rounded flex items-center justify-center">
              z-index: 1
            </div>
            <div className="absolute top-8 left-8 w-32 h-32 bg-green-500 rounded flex items-center justify-center z-[2]">
              z-index: 2
            </div>
            <div className="absolute top-12 left-12 w-32 h-32 bg-purple-500 rounded flex items-center justify-center z-[3]">
              z-index: 3
            </div>
          </div>
        </Card>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>

        {/* Modal/Dialog Example */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Modal/Dialog Positioning</h3>
          <div className="relative h-64 bg-gray-700 rounded overflow-hidden">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-gray-800 p-4 rounded shadow-lg max-w-sm w-full mx-4">
                <h4 className="font-medium mb-2">Modal Title</h4>
                <p className="text-sm text-gray-400 mb-4">
                  This modal uses absolute positioning with inset-0 to cover the entire container.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Close
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Dropdown Menu */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Dropdown Menu</h3>
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Hover me
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg py-1">
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-600">Option 3</a>
            </div>
          </div>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Use relative positioning for minor adjustments without affecting layout</li>
            <li>Absolute positioning should be used relative to a positioned parent</li>
            <li>Fixed positioning is great for elements that should stay in view</li>
            <li>Sticky positioning is perfect for headers that should stick while scrolling</li>
            <li>Be cautious with z-index - keep values organized and minimal</li>
            <li>Consider using Grid or Flexbox before resorting to absolute positioning</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default PositionsAndDisplay; 