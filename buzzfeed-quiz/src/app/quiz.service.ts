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
      },
      {
        id: 3,
        text: 'Qual tipo de viagem ideal?',
        answers: [
          { text: 'Aventura radical', score: 5 },
          { text: 'Praia relaxante', score: 2 },
          { text: 'Cultura em cidades históricas', score: 4 },
          { text: 'Cruzeiro luxuoso', score: 3 }
        ]
      },
      {
        id: 4,
        text: 'Seu ideal de final de semana?',
        answers: [
          { text: 'Festa com amigos', score: 5 },
          { text: 'Maratona de séries', score: 2 },
          { text: 'Passeio em família', score: 3 },
          { text: 'Caminhada na natureza', score: 4 }
        ]
      },
      {
        id: 5,
        text: 'Qual tema de festa prefere?',
        answers: [
          { text: 'Festa a fantasia', score: 5 },
          { text: 'Jantar elegante', score: 2 },
          { text: 'Festa do pijama', score: 3 },
          { text: 'Churrasco informal', score: 4 }
        ]
      },
      {
        id: 6,
        text: 'Qual estação do ano combina com você?',
        answers: [
          { text: 'Verão', score: 5 },
          { text: 'Inverno', score: 2 },
          { text: 'Primavera', score: 4 },
          { text: 'Outono', score: 3 }
        ]
      },
      {
        id: 7,
        text: 'Se pudesse ter um superpoder, qual seria?',
        answers: [
          { text: 'Super força', score: 5 },
          { text: 'Invisibilidade', score: 2 },
          { text: 'Telepatia', score: 4 },
          { text: 'Viajar no tempo', score: 3 }
        ]
      },
      {
        id: 8,
        text: 'Qual seu lanche preferido?',
        answers: [
          { text: 'Hambúrguer', score: 5 },
          { text: 'Salada de frutas', score: 2 },
          { text: 'Pizza', score: 4 },
          { text: 'Sushi', score: 3 }
        ]
      },
      {
        id: 9,
        text: 'Como você se comunica melhor?',
        answers: [
          { text: 'Pessoalmente', score: 5 },
          { text: 'Mensagens de texto', score: 2 },
          { text: 'Redes sociais', score: 3 },
          { text: 'Chamadas de vídeo', score: 4 }
        ]
      },
      {
        id: 10,
        text: 'Qual animal você seria?',
        answers: [
          { text: 'Leão', score: 5 },
          { text: 'Coruja', score: 3 },
          { text: 'Golfinho', score: 4 },
          { text: 'Tartaruga', score: 2 }
        ]
      }
    ];
  }

  getResults(): QuizResult[] {
    return [
      { minScore: 0, maxScore: 20, title: 'Personalidade Calma', description: 'Você prefere ambientes tranquilos e atividades relaxantes!' },
      { minScore: 21, maxScore: 35, title: 'Equilíbrio Perfeito', description: 'Sabe dosar aventura e momentos de paz!' },
      { minScore: 36, maxScore: 50, title: 'Espírito Livre', description: 'Adrenalina é seu combustível, sempre buscando novas experiências!' }
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