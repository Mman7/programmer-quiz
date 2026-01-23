export interface QuizQuestion {
  questionId: string;
  difficulty: string;
  topic: string;
  questionText: string;
  options: string[];
  answer?: string;
  reason?: string;
  userAnswer?: string;
}
