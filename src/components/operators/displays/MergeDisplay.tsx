import React from 'react';
import { useMarbleStore } from '../../../store/marbleStore';

export const MergeDisplay = () => {
  const { isStream3Enabled } = useMarbleStore();
  
  return (
    <div className="flex justify-center items-center py-4">
      <code className="bg-gray-100 px-4 py-2 rounded-lg text-gray-800 font-mono">
        {isStream3Enabled 
          ? 'merge(stream1$, stream2$, stream3$)'
          : 'merge(stream1$, stream2$)'}
      </code>
    </div>
  );
};