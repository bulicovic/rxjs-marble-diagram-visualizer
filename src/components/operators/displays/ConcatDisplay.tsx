import React from 'react';
import { useMarbleStore } from '../../../store/marbleStore';

export const ConcatDisplay = () => {
  const { isStream3Enabled } = useMarbleStore();
  
  return (
    <div className="flex justify-center items-center py-4">
      <code className="bg-primary px-4 py-2 rounded-lg text-text font-mono">
        {isStream3Enabled 
          ? 'concat(stream1$, stream2$, stream3$)'
          : 'concat(stream1$, stream2$)'}
      </code>
    </div>
  );
};
