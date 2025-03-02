import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMarbleStore } from '../../store/marbleStore';
import type { Marble as MarbleType } from '../../types/marble';

interface MarbleProps {
  marble: MarbleType;
  onCrossLine?: () => void;
}

export const Marble: React.FC<MarbleProps> = ({ marble, onCrossLine }) => {
  const { speed } = useMarbleStore();
  const controls = useAnimation();
  const displayValue = marble.sourceValues
    ? `${marble.sourceValues.stream1}${marble.sourceValues.stream2}${marble.sourceValues.stream3}`
    : marble.value;

  useEffect(() => {
    let hasCrossedLine = false;
    const LINE_POSITION = 0.35; // 35% - matches the line position in App.tsx
    const TOTAL_DURATION = 3.2; // Base duration in seconds

    const animate = async () => {
      await controls.start({
        left: "100%",
        transition: {
          duration: TOTAL_DURATION / speed,
          ease: "linear"
        },
        onUpdate: (latest) => {
          if (!hasCrossedLine && latest >= LINE_POSITION) {
            hasCrossedLine = true;
            onCrossLine?.();
          }
        }
      });
    };

    animate();

    return () => {
      controls.stop();
    };
  }, [controls, speed, onCrossLine]);

  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2"
      initial={{ left: "0%" }}
      animate={controls}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-banner"
        style={{ backgroundColor: marble.color }}
      >
        {displayValue}
      </div>
    </motion.div>
  );
};
