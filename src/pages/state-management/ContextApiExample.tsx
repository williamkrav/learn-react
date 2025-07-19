import { useTheme } from '../../context/ThemeContext';

// Example card component that uses theme context
function ThemedCard() {
  const { theme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">Themed Card</h3>
      <p>This card's appearance changes based on the current theme.</p>
    </div>
  );
}

// Example button component that uses theme context
function ThemedButton() {
  const { theme } = useTheme();

  return (
    <button
      className={`px-4 py-2 rounded ${
        theme === 'dark'
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      Themed Button
    </button>
  );
}

// Theme toggle component
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-full ${
        theme === 'dark' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'
      }`}
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default function ContextApiExample() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-200 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Context API Example: Theme Switcher
          </h1>
          <ThemeToggle />
        </div>

        <div className="space-y-8">
          <section
            className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">About Context API</h2>
            <div className="space-y-4">
              <p>
                Context API provides a way to pass data through the component tree without having to
                pass props manually at every level.
              </p>
              <p>
                In this example, we use Context API to manage a theme that can be accessed by any
                component in the app.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ThemedCard />
            <div
              className={`p-6 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Components Using Context</h3>
              <div className="space-y-4">
                <ThemedButton />
                <p className="mt-4">
                  These components automatically update when the theme changes, without passing
                  props through intermediate components.
                </p>
              </div>
            </div>
          </div>

          <section
            className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Avoid prop drilling through multiple component levels</li>
              <li>Share state across components easily</li>
              <li>Centralize state management for specific features</li>
              <li>Simplify component composition</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
