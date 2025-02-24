import React from 'react';

export const FilterDisplay = () => (
  <div className="flex justify-center items-center py-4">
    <code className="bg-primary px-4 py-2 rounded-lg text-text font-mono">
      {'filter(x => x % 2 === 1)'}
    </code>
  </div>
);
