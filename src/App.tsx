import React, { useState } from 'react';
import { problems } from './data/problems';
import { Problem } from './types';
import ProblemList from './components/ProblemList';
import CodeEditor from './components/CodeEditor';
import { BookOpen } from 'lucide-react';

function App() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [code, setCode] = useState<string>('');

  const handleProblemSelect = (problem: Problem) => {
    setSelectedProblem(problem);
    setCode(problem.starterCode);
  };

  return (
    <div className="min-h-screen bg-deep-blue-900 text-gray-100">
      <header className="bg-deep-blue-800 border-b border-deep-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-accent-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
              CodeCraft Academy
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ProblemList
              problems={problems}
              selectedProblem={selectedProblem}
              onSelectProblem={handleProblemSelect}
            />
          </div>

          <div className="lg:col-span-8">
            {selectedProblem ? (
              <div className="space-y-6">
                <div className="bg-deep-blue-800 rounded-lg shadow-xl p-6 border border-deep-blue-600">
                  <h2 className="text-2xl font-bold mb-2 text-white">{selectedProblem.title}</h2>
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedProblem.difficulty === 'Easy'
                        ? 'bg-green-900 text-green-300'
                        : selectedProblem.difficulty === 'Medium'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-red-900 text-red-300'
                    }`}>
                      {selectedProblem.difficulty}
                    </span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="whitespace-pre-wrap text-gray-300">{selectedProblem.description}</p>
                    
                    <h3 className="text-lg font-semibold mt-6 mb-4 text-white">Examples:</h3>
                    {selectedProblem.examples.map((example, index) => (
                      <div key={index} className="mb-4 bg-deep-blue-700 p-4 rounded-md border border-deep-blue-600">
                        <p className="font-mono text-sm"><strong className="text-accent-primary">Input:</strong> {example.input}</p>
                        <p className="font-mono text-sm"><strong className="text-accent-primary">Output:</strong> {example.output}</p>
                        {example.explanation && (
                          <p className="mt-2 text-gray-300"><strong className="text-accent-primary">Explanation:</strong> {example.explanation}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-deep-blue-800 rounded-lg shadow-xl p-6 border border-deep-blue-600">
                  <h3 className="text-lg font-semibold mb-4 text-white">Solution</h3>
                  <CodeEditor code={code} onChange={setCode} />
                </div>
              </div>
            ) : (
              <div className="bg-deep-blue-800 rounded-lg shadow-xl p-8 text-center border border-deep-blue-600">
                <h2 className="text-xl font-semibold text-gray-400">
                  Select a problem to start coding
                </h2>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;