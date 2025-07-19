import React, { useState, useCallback, useMemo } from 'react';

// Expensive calculation function to demonstrate useMemo
const calculateExpensiveValue = (number) => {
  console.log('Calculating expensive value...');
  // Simulate expensive calculation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += number;
  }
  return result;
};

// Child component using React.memo
const ExpensiveList = React.memo(function ExpensiveList({ items, onItemClick }) {
  console.log('ExpensiveList rendering...');
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li 
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="p-2 bg-gray-700 rounded cursor-pointer hover:bg-gray-600 transition-colors"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
});

// Main component demonstrating all optimization techniques
function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [items] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);
  const [inputValue, setInputValue] = useState('');

  // useCallback example - this function won't be recreated on every render
  const handleItemClick = useCallback((id) => {
    console.log('Item clicked:', id);
    // The function reference stays the same between renders
  }, []); // Empty dependency array means this function never changes

  // useMemo example - expensive calculation result is memoized
  const expensiveValue = useMemo(() => {
    return calculateExpensiveValue(count);
  }, [count]); // Only recalculate when count changes

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">React Performance Optimization Demo</h1>

      {/* Counter section demonstrating useMemo */}
      <section className="mb-8 p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">useMemo Example</h2>
        <p className="mb-2">Count: {count}</p>
        <p className="mb-4">Expensive Calculated Value: {expensiveValue}</p>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Increment Count
        </button>
        <p className="mt-2 text-sm text-gray-400">
          The expensive calculation only runs when count changes, not on every render
        </p>
      </section>

      {/* Input section to demonstrate unnecessary re-renders */}
      <section className="mb-8 p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">React.memo Example</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded mb-4 text-gray-100 focus:outline-none focus:border-blue-500"
          placeholder="Type here - list won't re-render"
        />
        <ExpensiveList items={items} onItemClick={handleItemClick} />
        <p className="mt-2 text-sm text-gray-400">
          The list doesn't re-render when you type in the input, thanks to React.memo
        </p>
      </section>

      {/* useCallback explanation */}
      <section className="p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">useCallback Example</h2>
        <p className="text-gray-300">
          The click handler for list items is memoized with useCallback.
          Open the console to see that the list only renders once,
          even though the parent component re-renders when you type in the input.
        </p>
      </section>
    </div>
  );
}

export default PerformanceDemo; 