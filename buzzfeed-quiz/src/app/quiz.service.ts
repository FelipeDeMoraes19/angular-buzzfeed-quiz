import { Injectable } from '@angular/core';
import { Question, QuizResult } from './models';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private currentScore = 0;

  getQuestions(): Question[] {
    return [
      {
        id: 1,
        text: 'Qual é seu gênero de filme favorito?',
        answers: [
          { text: 'Terror', score: 5 },
          { text: 'Comédia Romântica', score: 2 },
          { text: 'Ação', score: 4 },
          { text: 'Ficção Científica', score: 3 }
        ]
      },
      {
        id: 2,
        text: 'Como você passa seu tempo livre?',
        answers: [
          { text: 'Lendo', score: 3 },
          { text: 'Praticando esportes', score: 5 },
          { text: 'Jogando video games', score: 4 },
          { text: 'Assistindo TV', score: 2 }
        ]
      }
    ];
  }

  getResults(): QuizResult[] {
    return [
      { minScore: 0, maxScore: 6, title: 'Introvertido', description: 'Você prefere atividades mais calmas!' },
      { minScore: 7, maxScore: 10, title: 'Extrovertido', description: 'Você adora socializar e atividades energéticas!' }
    ];
  }

  addToScore(score: number): void {
    this.currentScore += score;
  }

  getFinalResult(): QuizResult {
    const result = this.getResults().find(r => 
      this.currentScore >= r.minScore && 
      this.currentScore <= r.maxScore
    );
    return result || this.getResults()[0];
  }

  resetQuiz(): void {
    this.currentScore = 0;
  }
}