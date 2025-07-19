import React, { useState, useEffect, useCallback, ComponentType } from 'react';
import Card from '../../components/ui/Card';

// Higher Order Component for Debouncing
function withDebounce<P extends object>(
  WrappedComponent: ComponentType<P & { onSearch: (query: string) => void }>,
  delay: number
) {
  return function WithDebounceComponent(props: P & { onSearch: (query: string) => void }) {
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
        props.onSearch(debouncedValue);
      }, delay);

      return () => clearTimeout(timer);
    }, [debouncedValue, delay, props.onSearch]);

    const handleChange = (value: string) => {
      setDebouncedValue(value);
    };

    return <WrappedComponent {...props} onSearch={handleChange} />;
  };
}

// Higher Order Component for Throttling
function withThrottle<P extends object>(
  WrappedComponent: ComponentType<P & { onClick: () => void }>,
  delay: number
) {
  return function WithThrottleComponent(props: P & { onClick: () => void }) {
    const [lastClick, setLastClick] = useState(0);

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClick >= delay) {
        props.onClick();
        setLastClick(now);
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
}

// Custom Hook for Debouncing
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Custom Hook for Throttling
function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const [lastCall, setLastCall] = useState(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        callback(...args);
        setLastCall(now);
      }
    },
    [callback, delay, lastCall]
  );
}

// Example Components using HoC
interface SearchProps {
  onSearch: (query: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => (
  <input
    type="text"
    onChange={(e) => onSearch(e.target.value)}
    placeholder="Search with debounce (HoC)"
    className="w-full px-4 py-2 bg-gray-700 rounded border border-gray-600 text-white"
  />
);

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
  >
    Click me (Throttled HoC)
  </button>
);

// Create debounced and throttled versions using HoC
const DebouncedSearch = withDebounce(SearchComponent, 500);
const ThrottledButton = withThrottle(ButtonComponent, 1000);

function DebouncingAndThrottling() {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [hookSearchTerm, setHookSearchTerm] = useState('');
  const [hookClickCount, setHookClickCount] = useState(0);
  const [showCode, setShowCode] = useState<string | null>(null);

  // Example search function
  const handleSearch = (query: string) => {
    setSearchResults([`Search result for: ${query}`, `Time: ${new Date().toLocaleTimeString()}`]);
  };

  // Debounced search term using custom hook
  const debouncedSearchTerm = useDebounce(hookSearchTerm, 500);

  // Effect for debounced search using hook
  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  // Throttled click handler using custom hook
  const handleThrottledClick = useThrottle(() => {
    setHookClickCount((prev) => prev + 1);
  }, 1000);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold mb-4">Debouncing and Throttling</h1>
        <p className="text-gray-400">
          Learn how to optimize performance using debouncing and throttling with Higher-Order
          Components and React Hooks.
        </p>
      </header>

      {/* HoC Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Higher-Order Component Examples</h2>

        <Card className="bg-gray-800 border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Debounced Search (HoC)</h3>
          <div className="space-y-4">
            <DebouncedSearch onSearch={handleSearch} />
            <div className="text-sm text-gray-400">
              {searchResults.map((result, index) => (
                <div key={index}>{result}</div>
              ))}
            </div>
          </div>
          <button
            className="mt-4 text-sm text-blue-400 hover:text-blue-300"
            onClick={() => setShowCode(showCode === 'debounce-hoc' ? null : 'debounce-hoc')}
          >
            {showCode === 'debounce-hoc' ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === 'debounce-hoc' && (
            <pre className="mt-4 p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`function withDebounce<P extends object>(
  WrappedComponent: ComponentType<P & { onSearch: (query: string) => void }>,
  delay: number
) {
  return function WithDebounceComponent(props: P & { onSearch: (query: string) => void }) {
    const [debouncedValue, setDebouncedValue] = useState('');
    
    useEffect(() => {
      const timer = setTimeout(() => {
        props.onSearch(debouncedValue);
      }, delay);

      return () => clearTimeout(timer);
    }, [debouncedValue, delay, props.onSearch]);

    const handleChange = (value: string) => {
      setDebouncedValue(value);
    };

    return <WrappedComponent {...props} onSearch={handleChange} />;
  };
}`}
              </code>
            </pre>
          )}
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Throttled Button (HoC)</h3>
          <div className="space-y-4">
            <ThrottledButton onClick={() => setClickCount((prev) => prev + 1)} />
            <div className="text-sm text-gray-400">
              Click count: {clickCount} (throttled to once per second)
            </div>
          </div>
          <button
            className="mt-4 text-sm text-blue-400 hover:text-blue-300"
            onClick={() => setShowCode(showCode === 'throttle-hoc' ? null : 'throttle-hoc')}
          >
            {showCode === 'throttle-hoc' ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === 'throttle-hoc' && (
            <pre className="mt-4 p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`function withThrottle<P extends object>(
  WrappedComponent: ComponentType<P & { onClick: () => void }>,
  delay: number
) {
  return function WithThrottleComponent(props: P & { onClick: () => void }) {
    const [lastClick, setLastClick] = useState(0);

    const handleClick = () => {
      const now = Date.now();
      if (now - lastClick >= delay) {
        props.onClick();
        setLastClick(now);
      }
    };

    return <WrappedComponent {...props} onClick={handleClick} />;
  };
}`}
              </code>
            </pre>
          )}
        </Card>
      </section>

      {/* Hook Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">React Hooks Examples</h2>

        <Card className="bg-gray-800 border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Debounced Search (Hook)</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={hookSearchTerm}
              onChange={(e) => setHookSearchTerm(e.target.value)}
              placeholder="Search with debounce (Hook)"
              className="w-full px-4 py-2 bg-gray-700 rounded border border-gray-600 text-white"
            />
            <div className="text-sm text-gray-400">
              {searchResults.map((result, index) => (
                <div key={index}>{result}</div>
              ))}
            </div>
          </div>
          <button
            className="mt-4 text-sm text-blue-400 hover:text-blue-300"
            onClick={() => setShowCode(showCode === 'debounce-hook' ? null : 'debounce-hook')}
          >
            {showCode === 'debounce-hook' ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === 'debounce-hook' && (
            <pre className="mt-4 p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`}
              </code>
            </pre>
          )}
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Throttled Button (Hook)</h3>
          <div className="space-y-4">
            <button
              onClick={handleThrottledClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Click me (Throttled Hook)
            </button>
            <div className="text-sm text-gray-400">
              Click count: {hookClickCount} (throttled to once per second)
            </div>
          </div>
          <button
            className="mt-4 text-sm text-blue-400 hover:text-blue-300"
            onClick={() => setShowCode(showCode === 'throttle-hook' ? null : 'throttle-hook')}
          >
            {showCode === 'throttle-hook' ? 'Hide Code' : 'Show Code'}
          </button>
          {showCode === 'throttle-hook' && (
            <pre className="mt-4 p-4 bg-gray-700 rounded overflow-x-auto">
              <code className="text-sm">
                {`function useThrottle<T extends (...args: any[]) => any>(callback: T, delay: number) {
  const [lastCall, setLastCall] = useState(0);

  return useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      callback(...args);
      setLastCall(now);
    }
  }, [callback, delay, lastCall]);
}`}
              </code>
            </pre>
          )}
        </Card>
      </section>

      {/* When to Use */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">When to Use Each Pattern</h2>
        <Card className="bg-gray-800 border-gray-700">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Debouncing</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Search inputs where you want to wait for user to stop typing</li>
                <li>Window resize event handlers</li>
                <li>Form validation as user types</li>
                <li>Saving draft content while editing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Throttling</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Scroll event handlers</li>
                <li>Game input handling</li>
                <li>API calls that need rate limiting</li>
                <li>Preventing double-clicks on submit buttons</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">HoC vs Hooks</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Use HoC when you want to reuse the same debounce/throttle logic across multiple
                  components
                </li>
                <li>Use Hooks when you need more flexibility or component-specific behavior</li>
                <li>Hooks are generally more readable and easier to test</li>
                <li>
                  HoC are better for complex transformations that affect multiple props or methods
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}

export default DebouncingAndThrottling;
