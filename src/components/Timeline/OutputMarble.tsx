import React from 'react';
import { motion } from 'framer-motion';
import { useMarbleStore } from '../../store/marbleStore';
import type { Marble as MarbleType } from '../../types/marble';

interface OutputMarbleProps {
  marble: MarbleType;
}

export const OutputMarble: React.FC<OutputMarbleProps> = ({ marble }) => {
  const { speed } = useMarbleStore();
  const displayValue = marble.sourceValues 
    ? `${marble.sourceValues.stream1}${marble.sourceValues.stream2}${marble.sourceValues.stream3}`
    : marble.value;

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2"
      initial={{ left: "35%", opacity: 0, scale: 0.5 }}
      animate={{ 
        left: "100%",
        opacity: 1,
        scale: 1,
        transition: {
          left: { duration: 2.1 / speed, ease: "linear" },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }
      }}
    >
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ backgroundColor: marble.color }}
      >
        {displayValue}
      </div>
    </motion.div>
  );
};