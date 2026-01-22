export interface QuizQuestion extends QuestionWithoutAnswer {
  questionId: string;
  tag: string;
  questionText: string;
  options: string[];
  answer: string;
  reason: string;
}

export interface QuestionWithoutAnswer {
  questionId: string;
  tag: string;
  questionText: string;
  options: string[];
}
