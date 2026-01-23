export type Answer = {
  questionId: string;
  answer: string;
  reason: string;
};

export type RequestAnswer = {
  questionId: string;
  topic: Topic;
};
