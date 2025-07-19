import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome Home</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-800 border-gray-700">
          <p className="mb-4 text-gray-300">This is an example of our reusable Card and Button components.</p>
          <Button onClick={() => alert('Welcome!')}>
            Click Me
          </Button>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <p className="mb-4 text-gray-300">You can use these components anywhere in your application.</p>
          <Button variant="secondary">
            Learn More
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Home; 