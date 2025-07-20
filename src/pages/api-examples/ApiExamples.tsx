import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface NewPost {
  title: string;
  body: string;
  userId: number;
}

const ApiExamples: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newPost, setNewPost] = useState<NewPost>({
    title: '',
    body: '',
    userId: 1,
  });

  // GET Example
  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching posts');
    } finally {
      setLoading(false);
    }
  };

  // POST Example
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const createdPost = await response.json();
      setPosts((prevPosts) => [createdPost, ...prevPosts]);
      setNewPost({ title: '', body: '', userId: 1 }); // Reset form
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while creating post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Examples</h1>

      {/* POST Example Form */}
      <div className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Create New Post (POST Example)</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost((prev) => ({ ...prev, title: e.target.value }))}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="body" className="block text-sm font-medium text-gray-300">
              Body
            </label>
            <textarea
              id="body"
              value={newPost.body}
              onChange={(e) => setNewPost((prev) => ({ ...prev, body: e.target.value }))}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
        </form>
      </div>

      {/* GET Example Results */}
      <div className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Posts List (GET Example)</h2>

        {error && (
          <div className="mb-4 p-4 bg-red-900/50 text-red-200 rounded-md border border-red-700">
            Error: {error}
          </div>
        )}

        {loading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-700 rounded"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-gray-700 rounded-lg p-4 bg-gray-700/50">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-300 mt-2">{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiExamples;
