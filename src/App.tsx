import React from 'react';
import { Timeline } from './components/Timeline';
import { Controls } from './components/Controls';
import { OperatorDisplay } from './components/OperatorDisplay';
import { useMarbleStore } from './store/marbleStore';
import { useMarbleStreams } from './hooks/useMarbleStreams';

function App() {
  const { 
    stream1Marbles,
    stream2Marbles,
    stream3Marbles,
    outputMarbles,
    currentOperator
  } = useMarbleStore();

  // Initialize marble streams
  useMarbleStreams();

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col mb-5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-xl sm:text-3xl font-bold">RxJS Marble Diagram Visualizer Beta V1.1</h1>
            <span className="text-sm text-gray-500">Updated Feb 22, 2025</span>
          </div>
          <span className="text-sm text-gray-500 mt-1">*added Subscriber Boundary line to showcase Stream Emission vs. Output Emission</span>
        </div>
        <a href="https://www.angularspace.com/built-rxjs-visualizer-in-4-hours-with-ai-no-coding/" target="_blank" rel="noopener noreferrer">
          <img src="/angularspacebanner.png" alt="Angular Space Banner" className="w-[150px] mb-5 h-auto rounded-lg shadow-lg" />
        </a>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="relative">
            {/* Vertical line with text */}
            <div className="absolute left-[35%] -translate-x-1/2 top-0 bottom-0 flex flex-col items-center z-10">
              {/* Purple line */}
              <div className="absolute inset-0 w-0.5 bg-purple-500"
                   style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)' }} />
              
              {/* Vertical text */}
              <div className="absolute bottom-0 -translate-x-4">
                <div className="transform -rotate-180 text-gray-400 text-[10px] tracking-wide whitespace-nowrap"
                     style={{ writingMode: 'vertical-rl' }}>
                  SUBSCRIBER BOUNDARY
                </div>
              </div>
            </div>
            
            {/* Timeline container */}
            <div className="space-y-8 relative z-20">
              <Timeline marbles={stream1Marbles} label="Stream 1" streamId={1} />
              <Timeline marbles={stream2Marbles} label="Stream 2" streamId={2} />
              <Timeline marbles={stream3Marbles} label="Stream 3" streamId={3} />
              
              <OperatorDisplay operator={currentOperator} />
              
              <Timeline marbles={outputMarbles} label="Output" isOutput />
            </div>
          </div>
        </div>
      </div>
      
      <Controls />
    </div>
  );
}

export default App;