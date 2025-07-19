import React, { useState } from 'react';
import Card from '../../components/ui/Card';

function TransitionsAndAnimations() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Transitions & Animations</h1>
        <p className="text-gray-400">
          Learn how to create smooth transitions and engaging animations with CSS.
        </p>
      </header>

      {/* CSS Transitions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Transitions</h2>

        {/* Basic Transitions */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Basic Transitions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div
                className="h-24 bg-blue-500 rounded transition-all duration-300 hover:bg-blue-600 hover:scale-110"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <p className="text-sm text-gray-400">Hover to see transform and color transition</p>
              <pre className="bg-gray-700 p-2 rounded text-xs">
                <code>
                  {`transition: all 300ms;
transform: scale(${isHovered ? '1.1' : '1'});`}
                </code>
              </pre>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-purple-500 rounded transition-[width] duration-300 hover:w-full" />
              <p className="text-sm text-gray-400">Width transition</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-green-500 rounded transition-opacity duration-300 hover:opacity-50" />
              <p className="text-sm text-gray-400">Opacity transition</p>
            </div>
          </div>
        </Card>

        {/* Timing Functions */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Timing Functions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="h-16 bg-blue-500 rounded transition-transform duration-500 ease-linear hover:translate-x-8" />
              <p className="text-sm text-gray-400 mt-2">ease-linear</p>
            </div>
            <div>
              <div className="h-16 bg-blue-500 rounded transition-transform duration-500 ease-in hover:translate-x-8" />
              <p className="text-sm text-gray-400 mt-2">ease-in</p>
            </div>
            <div>
              <div className="h-16 bg-blue-500 rounded transition-transform duration-500 ease-out hover:translate-x-8" />
              <p className="text-sm text-gray-400 mt-2">ease-out</p>
            </div>
            <div>
              <div className="h-16 bg-blue-500 rounded transition-transform duration-500 ease-in-out hover:translate-x-8" />
              <p className="text-sm text-gray-400 mt-2">ease-in-out</p>
            </div>
          </div>
        </Card>
      </section>

      {/* CSS Animations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Animations</h2>

        {/* Keyframe Animations */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Keyframe Animations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="h-24 bg-blue-500 rounded animate-bounce" />
              <p className="text-sm text-gray-400">Bounce Animation</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-purple-500 rounded animate-pulse" />
              <p className="text-sm text-gray-400">Pulse Animation</p>
            </div>

            <div className="space-y-2">
              <div className="h-24 bg-green-500 rounded animate-spin" />
              <p className="text-sm text-gray-400">Spin Animation</p>
            </div>
          </div>
        </Card>

        {/* Custom Animation */}
        <Card className="bg-gray-800 border-gray-700">
          <h3 className="font-medium mb-3">Custom Animation</h3>
          <div className="space-y-4">
            <button
              className="px-4 py-2 bg-blue-500 rounded"
              onClick={() => setIsPlaying(true)}
              onAnimationEnd={() => setIsPlaying(false)}
            >
              <div className={`${isPlaying ? 'animate-wiggle' : ''}`}>Click me to animate</div>
            </button>

            <pre className="bg-gray-700 p-4 rounded text-sm">
              <code>
                {`@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.animate-wiggle {
  animation: wiggle 200ms ease-in-out;
}`}
              </code>
            </pre>
          </div>
        </Card>
      </section>

      {/* Loading Animations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Loading Animations</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Spinner */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-gray-400">Spinner</p>
            </div>

            {/* Dots */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
              <p className="text-sm text-gray-400">Bouncing Dots</p>
            </div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-progress origin-left" />
              </div>
              <p className="text-sm text-gray-400">Progress Bar</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Use transitions for simple state changes</li>
            <li>Use animations for more complex, multi-step animations</li>
            <li>Keep animations subtle and purposeful</li>
            <li>Consider reduced motion preferences</li>
            <li>Animate transform and opacity for better performance</li>
            <li>Use appropriate timing functions for natural movement</li>
          </ul>
        </Card>
      </section>

      <style>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-progress {
          animation: progress 2s linear infinite;
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 200ms ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default TransitionsAndAnimations;
