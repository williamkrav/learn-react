import { useState } from 'react';
import { useTodoStore } from '../../store/todoStore';

const ZustandExample = () => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Zustand Todo Example</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Todo</h2>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Todo List</h2>
        {todos.length === 0 ? (
          <p className="text-gray-500">No todos yet. Add one above!</p>
        ) : (
          <ul className="space-y-3">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 rounded border-gray-300"
                />
                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="px-3 py-1 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">About Zustand</h2>
        <p className="text-gray-700">
          Zustand is a small, fast and scalable state management solution. It has a simple and
          intuitive API that makes it easy to manage state in React applications. Unlike Context or
          Redux, Zustand doesn't need providers and reduces boilerplate significantly.
        </p>
      </div>
    </div>
  );
};

export default ZustandExample;
