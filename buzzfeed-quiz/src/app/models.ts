export interface Question {
    id: number;
    text: string;
    answers: Answer[];
    image?: string;
  }
  
  export interface Answer {
    text: string;
    score: number;
  }
  
  export interface QuizResult {
    minScore: number;
    maxScore: number;
    title: string;
    description: string;
  }