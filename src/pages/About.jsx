import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <Card className="max-w-2xl bg-gray-800 border-gray-700">
        <h2 className="text-xl mb-4">Our Story</h2>
        <p className="mb-4 text-gray-300">
          This is an example page showing how to use our reusable components
          in different contexts and layouts.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">
            Contact Us
          </Button>
          <Button variant="secondary">
            Learn More
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default About;