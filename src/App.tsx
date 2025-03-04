import { Timeline } from './components/Timeline';
import { Controls } from './components/Controls';
import { OperatorDisplay } from './components/OperatorDisplay';
import { useMarbleStore } from './store/marbleStore';
import { useMarbleStreams } from './hooks/useMarbleStreams';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const {
    stream1Marbles,
    stream2Marbles,
    stream3Marbles,
    outputMarbles,
    isMultipleStreamOperator,
  } = useMarbleStore();

  // Initialize marble streams
  useMarbleStreams();

  return (
    <div className="min-h-screen bg-primary pt-20 pb-32 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col mb-5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-text text-xl sm:text-3xl font-bold">
              RxJS Marble Diagram Visualizer Beta V1.1
            </h1>
            <span className="text-text-muted text-sm">Updated Feb 22, 2025</span>
          </div>
          <span className="text-text-muted text-sm mt-1">
            *added Subscriber Boundary line to showcase Stream Emission vs. Output Emission
          </span>
        </div>
        <a
          href="https://www.angularspace.com/built-rxjs-visualizer-in-4-hours-with-ai-no-coding/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/angularspacebanner.png"
            alt="Angular Space Banner"
            className="w-[150px] mb-5 h-auto rounded-lg shadow-banner"
          />
        </a>

        <div className="bg-secondary rounded-lg shadow-banner p-8 transition-colors">
          <div className="relative">
            {/* Vertical line with text */}
            <div className="absolute left-[35%] -translate-x-1/2 top-0 bottom-0 flex flex-col items-center z-10">
              {/* Purple line */}
              <div
                className="absolute inset-0 w-0.5 bg-purple transition-colors"
                style={{ boxShadow: '0 0 8px var(--color-purple-glow)' }}
              />

              {/* Vertical text */}
              <div className="absolute bottom-0 -translate-x-4">
                <div
                  className="transform -rotate-180 text-text-muted text-[10px] tracking-wide whitespace-nowrap transition-colors"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  SUBSCRIBER BOUNDARY
                </div>
              </div>
            </div>

            {/* Timeline container */}
            <div className="space-y-8 relative z-20">
              <Timeline marbles={stream1Marbles} label="Stream 1" streamId={1} />
              {isMultipleStreamOperator && (
                <Timeline marbles={stream2Marbles} label="Stream 2" streamId={2} />
              )}
              {isMultipleStreamOperator && (
                <Timeline marbles={stream3Marbles} label="Stream 3" streamId={3} />
              )}

              <OperatorDisplay />

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
