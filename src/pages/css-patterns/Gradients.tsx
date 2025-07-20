import React, { useState } from 'react';
import Card from '../../components/ui/Card';

interface GradientConfig {
  type: 'linear' | 'radial' | 'conic';
  colors: string[];
  angle?: number;
  position?: string;
  size?: string;
}

function Gradients() {
  const [linearConfig, setLinearConfig] = useState<GradientConfig>({
    type: 'linear',
    colors: ['#FF0080', '#7928CA'],
    angle: 45,
  });

  const [radialConfig, setRadialConfig] = useState<GradientConfig>({
    type: 'radial',
    colors: ['#00DC82', '#36E4DA'],
    position: 'center',
    size: 'farthest-corner',
  });

  const [conicConfig, setConicConfig] = useState<GradientConfig>({
    type: 'conic',
    colors: ['#FF0080', '#7928CA', '#00DC82', '#36E4DA'],
    position: 'center',
    angle: 0,
  });

  // Generate CSS gradient string
  const generateGradient = (config: GradientConfig): string => {
    if (config.type === 'linear') {
      return `linear-gradient(${config.angle}deg, ${config.colors.join(', ')})`;
    } else if (config.type === 'radial') {
      return `radial-gradient(${config.size} at ${config.position}, ${config.colors.join(', ')})`;
    } else {
      return `conic-gradient(from ${config.angle}deg at ${config.position}, ${config.colors.join(', ')})`;
    }
  };

  // Generate CSS code for display
  const generateCSSCode = (config: GradientConfig): string => {
    return `background: ${generateGradient(config)};`;
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">CSS Gradients</h1>
        <p className="text-gray-400">
          Learn how to create beautiful linear and radial gradients using CSS.
        </p>
      </header>

      {/* Linear Gradient Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Linear Gradient</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-6">
            {/* Preview */}
            <div
              className="h-48 rounded-lg transition-all duration-300"
              style={{ background: generateGradient(linearConfig) }}
            />

            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Angle</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={linearConfig.angle}
                  onChange={(e) =>
                    setLinearConfig({
                      ...linearConfig,
                      angle: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-400 mt-1">{linearConfig.angle}°</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Color 1</label>
                  <input
                    type="color"
                    value={linearConfig.colors[0]}
                    onChange={(e) =>
                      setLinearConfig({
                        ...linearConfig,
                        colors: [e.target.value, linearConfig.colors[1]],
                      })
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Color 2</label>
                  <input
                    type="color"
                    value={linearConfig.colors[1]}
                    onChange={(e) =>
                      setLinearConfig({
                        ...linearConfig,
                        colors: [linearConfig.colors[0], e.target.value],
                      })
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Code */}
            <div>
              <h3 className="text-lg font-medium mb-2">CSS Code</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300">{generateCSSCode(linearConfig)}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Radial Gradient Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Radial Gradient</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-6">
            {/* Preview */}
            <div
              className="h-48 rounded-lg transition-all duration-300"
              style={{ background: generateGradient(radialConfig) }}
            />

            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Position</label>
                <select
                  value={radialConfig.position}
                  onChange={(e) =>
                    setRadialConfig({
                      ...radialConfig,
                      position: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="center">Center</option>
                  <option value="top">Top</option>
                  <option value="right">Right</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                  <option value="top left">Top Left</option>
                  <option value="top right">Top Right</option>
                  <option value="bottom left">Bottom Left</option>
                  <option value="bottom right">Bottom Right</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select
                  value={radialConfig.size}
                  onChange={(e) =>
                    setRadialConfig({
                      ...radialConfig,
                      size: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="farthest-corner">Farthest Corner</option>
                  <option value="closest-corner">Closest Corner</option>
                  <option value="farthest-side">Farthest Side</option>
                  <option value="closest-side">Closest Side</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Color 1</label>
                  <input
                    type="color"
                    value={radialConfig.colors[0]}
                    onChange={(e) =>
                      setRadialConfig({
                        ...radialConfig,
                        colors: [e.target.value, radialConfig.colors[1]],
                      })
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Color 2</label>
                  <input
                    type="color"
                    value={radialConfig.colors[1]}
                    onChange={(e) =>
                      setRadialConfig({
                        ...radialConfig,
                        colors: [radialConfig.colors[0], e.target.value],
                      })
                    }
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Code */}
            <div>
              <h3 className="text-lg font-medium mb-2">CSS Code</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300">{generateCSSCode(radialConfig)}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Conic Gradient Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Conic Gradient</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-6">
            {/* Preview */}
            <div
              className="h-48 rounded-lg transition-all duration-300"
              style={{ background: generateGradient(conicConfig) }}
            />

            {/* Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Starting Angle</label>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={conicConfig.angle}
                  onChange={(e) =>
                    setConicConfig({
                      ...conicConfig,
                      angle: parseInt(e.target.value),
                    })
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-400 mt-1">{conicConfig.angle}°</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Position</label>
                <select
                  value={conicConfig.position}
                  onChange={(e) =>
                    setConicConfig({
                      ...conicConfig,
                      position: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                  <option value="center">Center</option>
                  <option value="top">Top</option>
                  <option value="right">Right</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                  <option value="top left">Top Left</option>
                  <option value="top right">Top Right</option>
                  <option value="bottom left">Bottom Left</option>
                  <option value="bottom right">Bottom Right</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {conicConfig.colors.map((color, index) => (
                  <div key={index}>
                    <label className="block text-sm font-medium mb-2">Color {index + 1}</label>
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => {
                        const newColors = [...conicConfig.colors];
                        newColors[index] = e.target.value;
                        setConicConfig({
                          ...conicConfig,
                          colors: newColors,
                        });
                      }}
                      className="w-full h-10 rounded cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Code */}
            <div>
              <h3 className="text-lg font-medium mb-2">CSS Code</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300">{generateCSSCode(conicConfig)}</code>
              </pre>
            </div>
          </div>
        </Card>
      </section>

      {/* Common Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Button Gradient */}
          <Card className="bg-gray-800 border-gray-700">
            <h3 className="text-lg font-medium mb-4">Button Gradient</h3>
            <button className="w-full py-2 px-4 rounded bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Gradient Button
            </button>
            <pre className="mt-4 bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`background: linear-gradient(to right, #3B82F6, #9333EA);
hover {
  background: linear-gradient(to right, #2563EB, #7C3AED);
}`}
              </code>
            </pre>
          </Card>

          {/* Card Background */}
          <Card className="bg-gray-800 border-gray-700">
            <h3 className="text-lg font-medium mb-4">Card Background</h3>
            <div className="h-32 rounded bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" />
            <pre className="mt-4 bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`background: linear-gradient(
  to bottom right,
  #EC4899,
  #EF4444,
  #F59E0B
);`}
              </code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Tips and Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tips and Best Practices</h2>
        <Card className="bg-gray-800 border-gray-700">
          <ul className="space-y-3 text-gray-300">
            <li>• Use subtle gradients for backgrounds (low contrast between colors)</li>
            <li>• Consider using multiple color stops for more complex gradients</li>
            <li>• Add hover effects with gradient transitions</li>
            <li>• Use radial gradients for spotlight or circular emphasis</li>
            <li>• Combine gradients with overlays for better text readability</li>
            <li>• Test gradients across different screen sizes</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}

export default Gradients;
