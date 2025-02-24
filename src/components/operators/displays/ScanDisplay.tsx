import React from 'react';

export const ScanDisplay = () => (
  <div className="flex justify-center items-center py-4">
    <code className="bg-primary px-4 py-2 rounded-lg text-text font-mono">
      {'scan((acc, curr) => acc + curr, 0)'}
    </code>
  </div>
);
