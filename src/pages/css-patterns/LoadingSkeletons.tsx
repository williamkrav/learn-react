import React, { useState, useEffect } from 'react';
import Card from '../../components/ui/Card';

function LoadingSkeletons() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCode, setShowCode] = useState<string | null>(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Reset loading state for demo
  const resetLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Loading Skeletons</h1>
        <p className="text-gray-400">
          Learn how to create engaging loading states using skeleton patterns.
        </p>
      </header>

      {/* Controls */}
      <div className="flex gap-4 items-center">
        <button
          onClick={resetLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Reload Skeletons
        </button>
        <div className="text-sm text-gray-400">{isLoading ? 'Loading...' : 'Content Loaded'}</div>
      </div>

      {/* Basic Text Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Text Skeleton</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-4">
            {isLoading ? (
              <>
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
                <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse" />
              </>
            ) : (
              <>
                <p>This is the actual content that will be displayed.</p>
                <p>It replaces the skeleton loading state.</p>
                <p>Notice how the width of each line matched the skeleton.</p>
              </>
            )}
          </div>
          <button
            className="mt-4 text-sm text-blue-400 hover:text-blue-300"
            onClick={() => setShowCode(showCode === 'basic' ? null : 'basic')}
          >
            {showCode === 'basic' ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === 'basic' && (
            <pre className="mt-4 p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`<div className="space-y-4">
  <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse" />
  <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
  <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse" />
</div>`}
              </code>
            </pre>
          )}
        </Card>
      </section>

      {/* Card Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Skeleton</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <Card key={i} className="bg-gray-800 border-gray-700">
              {isLoading ? (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-700 rounded animate-pulse" />
                  <div className="h-6 bg-gray-700 rounded w-3/4 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse" />
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-full animate-pulse" />
                      <div className="h-4 bg-gray-700 rounded w-24 animate-pulse" />
                    </div>
                    <div className="h-4 bg-gray-700 rounded w-16 animate-pulse" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-700 rounded flex items-center justify-center">
                    Image
                  </div>
                  <h3 className="text-xl font-semibold">Card Title</h3>
                  <p className="text-gray-400">
                    This is the card content that appears after loading. Notice how it matches the
                    skeleton structure.
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-700 rounded-full" />
                      <span>Author Name</span>
                    </div>
                    <span className="text-gray-400">Date</span>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* List Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">List Skeleton</h2>
        <Card className="bg-gray-800 border-gray-700">
          {isLoading ? (
            <div className="divide-y divide-gray-700">
              {[1, 2, 3].map((i) => (
                <div key={i} className="py-4 space-y-2 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse" />
                      <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse" />
                    </div>
                    <div className="h-8 w-16 bg-gray-700 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-gray-700">
              {[1, 2, 3].map((i) => (
                <div key={i} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded" />
                    <div className="flex-1">
                      <h4 className="font-medium">List Item {i}</h4>
                      <p className="text-sm text-gray-400">Item description</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 rounded">Action</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </section>

      {/* Table Skeleton */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Table Skeleton</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {isLoading
                  ? [1, 2, 3].map((i) => (
                      <tr key={i}>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse" />
                            <div className="h-4 bg-gray-700 rounded w-24 animate-pulse" />
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="h-4 bg-gray-700 rounded w-20 animate-pulse" />
                        </td>
                        <td className="py-3 px-4">
                          <div className="h-4 bg-gray-700 rounded w-16 animate-pulse" />
                        </td>
                        <td className="py-3 px-4">
                          <div className="h-8 bg-gray-700 rounded w-20 animate-pulse" />
                        </td>
                      </tr>
                    ))
                  : [1, 2, 3].map((i) => (
                      <tr key={i}>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-700 rounded-full" />
                            <span>User Name</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">Developer</td>
                        <td className="py-3 px-4">Active</td>
                        <td className="py-3 px-4">
                          <button className="px-4 py-2 bg-blue-500 rounded">Edit</button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Match skeleton dimensions to actual content</li>
            <li>Use subtle animations to indicate loading state</li>
            <li>Maintain consistent spacing and layout</li>
            <li>Consider using different widths for text lines</li>
            <li>Keep animations subtle and not distracting</li>
            <li>Ensure skeletons reflect the actual content structure</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default LoadingSkeletons;
