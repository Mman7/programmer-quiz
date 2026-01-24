// Represents a user's answer to a question
export type Answer = {
  questionId: string;
  answer: string;
  reason: string;
};

// Represents a request for an answer to a question
export type RequestAnswer = {
  questionId: string;
  topic: Topic;
};
