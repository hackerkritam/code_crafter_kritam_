import { ChevronRight, CircleDot } from 'lucide-react';
import { Problem } from '../types';

interface ProblemListProps {
  problems: Problem[];
  selectedProblem: Problem | null;
  onSelectProblem: (problem: Problem) => void;
}

export default function ProblemList({ problems, selectedProblem, onSelectProblem }: ProblemListProps) {
  return (
    <div className="w-full max-w-md bg-deep-blue-800 rounded-lg shadow-xl border border-deep-blue-600">
      <div className="p-4 border-b border-deep-blue-600">
        <h2 className="text-xl font-semibold text-white">Problems</h2>
      </div>
      <div className="divide-y divide-deep-blue-600">
        {problems.map((problem) => (
          <button
            key={problem.id}
            onClick={() => onSelectProblem(problem)}
            className={`w-full p-4 text-left hover:bg-deep-blue-700 flex items-center justify-between transition-colors duration-200 ${
              selectedProblem?.id === problem.id ? 'bg-deep-blue-700' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <CircleDot
                className={`w-4 h-4 ${
                  problem.difficulty === 'Easy'
                    ? 'text-green-400'
                    : problem.difficulty === 'Medium'
                    ? 'text-yellow-400'
                    : 'text-red-400'
                }`}
              />
              <span className="font-medium text-gray-200">{problem.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}