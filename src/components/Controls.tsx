import React from 'react';
import { RotateCcw, Plus, Minus } from 'lucide-react';
import { useMarbleStore } from '../store/marbleStore';
import { SpeedControl } from './SpeedControl';
import type { RxJSOperator } from '../types/marble';

const operators: RxJSOperator[] = ['map', 'filter', 'merge', 'combineLatest', 'scan'];

const multiStreamOperators = ['merge', 'combineLatest'];

export const Controls: React.FC = () => {
  const { 
    currentOperator,
    setOperator,
    resetPipeline,
    isStream3Enabled,
    toggleStream3
  } = useMarbleStore();

  // Only show Stream 3 toggle for operators that support it
  const showStream3Toggle = multiStreamOperators.includes(currentOperator);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-[9999]">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showStream3Toggle && (
            <button
              onClick={toggleStream3}
              className="px-4 py-2 bg-gray-500 text-sm text-white rounded-md hover:bg-gray-600 transition-colors flex items-center gap-2"
              title={isStream3Enabled ? "Disable Stream 3" : "Enable Stream 3"}
            >
              {isStream3Enabled ? <Minus size={16} /> : <Plus size={16} />} Stream 3
            </button>
          )}

          <button
            onClick={resetPipeline}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors text-gray-600"
            title="Reset Pipeline"
          >
            <RotateCcw size={20} />
          </button>

          <SpeedControl />
        </div>
        
        <select
          value={currentOperator}
          onChange={(e) => setOperator(e.target.value as RxJSOperator)}
          className="px-3 py-2 border rounded-md bg-white hover:bg-gray-50 transition-colors"
        >
          {operators.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};