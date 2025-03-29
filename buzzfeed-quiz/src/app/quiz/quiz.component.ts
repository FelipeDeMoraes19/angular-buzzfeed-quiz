import { Component, OnInit } from '@angular/core'; 
import { QuizService } from '../quiz.service';
import { Question, QuizResult } from '../models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit { 
  questions: Question[] = []; 
  currentQuestionIndex = 0;
  showResult = false;
  result!: QuizResult;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void { 
    this.questions = this.quizService.getQuestions(); 
  }

  onAnswerSelected(score: number): void {
    this.quizService.addToScore(score);
    
    if(this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResult = true;
      this.result = this.quizService.getFinalResult();
    }
  }

  restartQuiz(): void {
    this.quizService.resetQuiz();
    this.currentQuestionIndex = 0;
    this.showResult = false;
  }
}