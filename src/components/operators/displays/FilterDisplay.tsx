import React from 'react';

export const FilterDisplay = () => (
  <div className="flex justify-center items-center py-4">
    <code className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 font-mono">
      {'filter(x => x % 2 === 1)'}
    </code>
  </div>
);