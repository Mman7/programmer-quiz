export interface QuizQuestion {
  questionId: string;
  tag: string;
  questionText: string;
  options: string[];
  answer?: string;
  reason?: string;
}
