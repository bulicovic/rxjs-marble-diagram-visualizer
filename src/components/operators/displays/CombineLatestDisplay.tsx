import React from 'react';
import { useMarbleStore } from '../../../store/marbleStore';

export const CombineLatestDisplay = () => {
  const { isStream3Enabled } = useMarbleStore();
  
  return (
    <div className="flex justify-center items-center py-4">
      <code className="bg-primary px-4 py-2 rounded-lg text-text font-mono">
        {isStream3Enabled 
          ? 'combineLatest([stream1$, stream2$, stream3$], (x, y, z) => x + y + z)'
          : 'combineLatest([stream1$, stream2$], (x, y) => x + y)'}
      </code>
    </div>
  );
};
