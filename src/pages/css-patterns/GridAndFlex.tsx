import React, { useState } from 'react';
import Card from '../../components/ui/Card';

function GridAndFlex() {
  const [selectedFlexDirection, setFlexDirection] = useState<string>('row');
  const [selectedJustify, setJustify] = useState<string>('flex-start');
  const [selectedAlign, setAlign] = useState<string>('stretch');

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Grid and Flexbox Layouts</h1>
        <p className="text-gray-400">
          Learn how to create modern, responsive layouts using CSS Grid and Flexbox.
        </p>
      </header>

      {/* Flexbox Playground */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Flexbox Playground</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Flex Direction</label>
                <select
                  className="w-full bg-gray-700 border-gray-600 rounded p-2"
                  value={selectedFlexDirection}
                  onChange={(e) => setFlexDirection(e.target.value)}
                >
                  <option value="row">row</option>
                  <option value="column">column</option>
                  <option value="row-reverse">row-reverse</option>
                  <option value="column-reverse">column-reverse</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Justify Content</label>
                <select
                  className="w-full bg-gray-700 border-gray-600 rounded p-2"
                  value={selectedJustify}
                  onChange={(e) => setJustify(e.target.value)}
                >
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="space-between">space-between</option>
                  <option value="space-around">space-around</option>
                  <option value="space-evenly">space-evenly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Align Items</label>
                <select
                  className="w-full bg-gray-700 border-gray-600 rounded p-2"
                  value={selectedAlign}
                  onChange={(e) => setAlign(e.target.value)}
                >
                  <option value="stretch">stretch</option>
                  <option value="flex-start">flex-start</option>
                  <option value="flex-end">flex-end</option>
                  <option value="center">center</option>
                  <option value="baseline">baseline</option>
                </select>
              </div>
            </div>

            <div
              className="h-64 bg-gray-700 rounded p-4"
              style={{
                display: 'flex',
                flexDirection: selectedFlexDirection as any,
                justifyContent: selectedJustify,
                alignItems: selectedAlign,
              }}
            >
              <div className="bg-blue-500 text-white p-4 rounded">1</div>
              <div className="bg-blue-600 text-white p-6 rounded">2</div>
              <div className="bg-blue-700 text-white p-8 rounded">3</div>
            </div>

            <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
              <code className="text-sm">
                {`.container {
  display: flex;
  flex-direction: ${selectedFlexDirection};
  justify-content: ${selectedJustify};
  align-items: ${selectedAlign};
}`}
              </code>
            </pre>
          </div>
        </Card>
      </section>

      {/* Common Flexbox Patterns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Flexbox Patterns</h2>

        {/* Navigation Bar */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Navigation Bar</h3>
          <div className="bg-gray-700 rounded p-4">
            <nav className="flex justify-between items-center">
              <div className="text-xl font-bold">Logo</div>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            A common navbar pattern using justify-between and flex gap
          </p>
        </Card>

        {/* Card with Media */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Media Card</h3>
          <div className="bg-gray-700 rounded p-4">
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-600 rounded flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="font-medium">Card Title</h4>
                <p className="text-sm text-gray-400">
                  This card uses flex-shrink-0 to prevent the image from shrinking and flex-grow to
                  allow the content to take remaining space.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CSS Grid Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Grid Layouts</h2>

        {/* Basic Grid */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Basic Grid</h3>
          <div className="bg-gray-700 rounded p-4">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-gray-600 p-4 rounded text-center">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <pre className="mt-4 bg-gray-700 p-4 rounded overflow-x-auto">
            <code className="text-sm">
              {`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`}
            </code>
          </pre>
        </Card>

        {/* Advanced Grid Layout */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Advanced Grid Layout</h3>
          <div className="bg-gray-700 rounded p-4">
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
              <div className="bg-blue-500 col-span-2 row-span-2 p-4 rounded">Featured</div>
              <div className="bg-blue-600 p-4 rounded">Item 2</div>
              <div className="bg-blue-700 p-4 rounded">Item 3</div>
              <div className="bg-blue-600 p-4 rounded">Item 4</div>
              <div className="bg-blue-700 p-4 rounded">Item 5</div>
            </div>
          </div>
          <pre className="mt-4 bg-gray-700 p-4 rounded overflow-x-auto">
            <code className="text-sm">
              {`.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
}

.featured {
  grid-column: span 2;
  grid-row: span 2;
}`}
            </code>
          </pre>
        </Card>

        {/* Grid Areas */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Grid Template Areas</h3>
          <div className="bg-gray-700 rounded p-4">
            <div className="grid grid-cols-[200px_1fr_200px] grid-rows-[auto_1fr_auto] min-h-[200px] gap-4">
              <header className="bg-blue-500 col-span-3 p-4 rounded">Header</header>
              <nav className="bg-blue-600 p-4 rounded">Sidebar</nav>
              <main className="bg-blue-700 p-4 rounded">Main Content</main>
              <aside className="bg-blue-600 p-4 rounded">Aside</aside>
              <footer className="bg-blue-500 col-span-3 p-4 rounded">Footer</footer>
            </div>
          </div>
          <pre className="mt-4 bg-gray-700 p-4 rounded overflow-x-auto">
            <code className="text-sm">
              {`.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}

header, footer { grid-column: 1 / -1; }`}
            </code>
          </pre>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Use Flexbox for one-dimensional layouts (rows OR columns)</li>
            <li>Use Grid for two-dimensional layouts (rows AND columns)</li>
            <li>Use gap instead of margins for consistent spacing</li>
            <li>Consider using auto-fit/auto-fill for responsive grids</li>
            <li>Use flex-wrap for flexible row layouts that can wrap</li>
            <li>Combine Grid and Flexbox for complex layouts</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default GridAndFlex;
