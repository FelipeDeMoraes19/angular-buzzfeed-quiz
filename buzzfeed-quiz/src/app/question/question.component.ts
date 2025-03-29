import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from '../models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answerSelected = new EventEmitter<number>();

  selectAnswer(answer: Answer): void {
    this.answerSelected.emit(answer.score);
  }
}