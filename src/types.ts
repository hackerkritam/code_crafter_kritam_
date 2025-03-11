export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  starterCode: string;
  solution: string;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}