import React, { useState, useCallback, useMemo } from 'react';

// Expensive calculation function to demonstrate useMemo
const calculateExpensiveValue = (number: number): number => {
  console.log('Calculating expensive value...');
  // Simulate expensive calculation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += number;
  }
  return result;
};

interface Item {
  id: number;
  text: string;
}

interface ExpensiveListProps {
  items: Item[];
  onItemClick: (id: number) => void;
}

// Child component using React.memo
const ExpensiveList = React.memo(function ExpensiveList({
  items,
  onItemClick,
}: ExpensiveListProps) {
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

interface CallbackChildProps {
  onClick: (name: string) => void;
}

// Component to demonstrate useCallback
const CallbackChild = React.memo(function CallbackChild({ onClick }: CallbackChildProps) {
  console.log('CallbackChild rendering...');
  return (
    <div className="space-y-2">
      <button
        onClick={() => onClick('Button 1')}
        className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
      >
        Button 1
      </button>
      <button
        onClick={() => onClick('Button 2')}
        className="w-full p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
      >
        Button 2
      </button>
    </div>
  );
});

function PerformanceDemo() {
  const [count, setCount] = useState<number>(0);
  const [items] = useState<Item[]>([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);
  const [inputValue, setInputValue] = useState<string>('');
  const [lastClicked, setLastClicked] = useState<string>('None');

  // useCallback example - this function won't be recreated on every render
  const handleItemClick = useCallback((id: number) => {
    console.log('Item clicked:', id);
    // The function reference stays the same between renders
  }, []); // Empty dependency array means this function never changes

  // Another useCallback example with dependencies
  const handleButtonClick = useCallback((buttonName: string) => {
    console.log('Button clicked:', buttonName);
    setLastClicked(buttonName);
  }, []); // Empty dependency array since we don't use any external values

  // Non-memoized function for comparison
  const handleButtonClickNormal = (buttonName: string) => {
    console.log('Normal button clicked:', buttonName);
    setLastClicked(buttonName);
  };

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
          onClick={() => setCount((c) => c + 1)}
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

      {/* useCallback comparison section */}
      <section className="mb-8 p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">useCallback vs Normal Function</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-medium mb-2">With useCallback</h3>
            <CallbackChild onClick={handleButtonClick} />
          </div>
          <div>
            <h3 className="font-medium mb-2">Without useCallback</h3>
            <CallbackChild onClick={handleButtonClickNormal} />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Last clicked: {lastClicked}
          <br />
          Open console and type in the input above - notice how the right component re-renders on
          every input change, but the left one doesn't
        </p>
      </section>

      {/* useCallback explanation */}
      <section className="p-4 border border-gray-700 rounded-lg bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Why useCallback?</h2>
        <div className="space-y-2 text-gray-300">
          <p>
            Without useCallback, <code className="text-blue-400">handleButtonClickNormal</code> is
            recreated on every render (try typing in the input field above).
          </p>
          <p>
            Even though the function does the same thing, React.memo sees it as a new prop and
            re-renders the component unnecessarily.
          </p>
          <p>
            With useCallback, <code className="text-blue-400">handleButtonClick</code> keeps the
            same reference between renders, preventing unnecessary re-renders of the memoized child
            component.
          </p>
        </div>
      </section>
    </div>
  );
}

export default PerformanceDemo;
