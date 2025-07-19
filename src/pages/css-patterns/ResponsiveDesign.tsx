import React from 'react';
import Card from '../../components/ui/Card';

function ResponsiveDesign() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Responsive Design Patterns</h1>
        <p className="text-gray-400">
          Learn about different responsive design techniques using media queries and modern CSS.
        </p>
      </header>

      {/* Media Query Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Media Queries</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-4">
            <div className="p-4 bg-gray-700 rounded">
              <p className="hidden sm:block text-green-400">Visible on small screens and up (sm)</p>
              <p className="hidden md:block text-blue-400">Visible on medium screens and up (md)</p>
              <p className="hidden lg:block text-purple-400">Visible on large screens and up (lg)</p>
              <p className="hidden xl:block text-pink-400">Visible on extra large screens and up (xl)</p>
              <p className="block sm:hidden text-red-400">Only visible on extra small screens</p>
            </div>
            <pre className="p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`// Tailwind breakpoints
sm: '640px'   // @media (min-width: 640px)
md: '768px'   // @media (min-width: 768px)
lg: '1024px'  // @media (min-width: 1024px)
xl: '1280px'  // @media (min-width: 1280px)
2xl: '1536px' // @media (min-width: 1536px)`}
              </code>
            </pre>
          </div>
        </Card>
      </section>

      {/* Responsive Layout Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Layout Example</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="bg-gray-800 border-gray-700">
              <div className="aspect-video bg-gray-700 rounded mb-4"></div>
              <h3 className="font-medium mb-2">Card {item}</h3>
              <p className="text-sm text-gray-400">
                This card is part of a responsive grid that changes columns based on screen size.
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Responsive Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Responsive Typography</h2>
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
            This text scales with the viewport
          </h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400">
            Typography can also be responsive using media queries or modern CSS features like clamp().
          </p>
        </Card>
      </section>

      {/* Container Queries Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Container Queries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="@container">
            <Card className="bg-gray-800 border-gray-700">
              <div className="@md:flex gap-4">
                <div className="@md:w-1/3 mb-4 @md:mb-0">
                  <div className="aspect-square bg-gray-700 rounded"></div>
                </div>
                <div className="@md:w-2/3">
                  <h3 className="font-medium mb-2">Container Query Card</h3>
                  <p className="text-sm text-gray-400">
                    This card uses container queries to change its layout based on its own width,
                    not the viewport width.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="@container">
            <Card className="bg-gray-800 border-gray-700">
              <div className="@md:flex gap-4">
                <div className="@md:w-1/3 mb-4 @md:mb-0">
                  <div className="aspect-square bg-gray-700 rounded"></div>
                </div>
                <div className="@md:w-2/3">
                  <h3 className="font-medium mb-2">Container Query Card</h3>
                  <p className="text-sm text-gray-400">
                    Resize the viewport to see how these cards respond independently.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResponsiveDesign; 