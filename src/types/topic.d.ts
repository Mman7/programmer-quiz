export type Topic = {
  name: TopicType;
  difficulty: string;
};

export type RequestAnswer = {
  questionId: string;
  topic: Topic;
};
