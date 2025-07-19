import React from 'react';
import { Outlet } from 'react-router-dom';
import ExamplesNav from '../ui/ExamplesNav';

function ExamplesLayout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <ExamplesNav />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default ExamplesLayout;
