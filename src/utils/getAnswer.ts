import { getKeyByValue } from "../enum/topicTypes";
import { allTopic } from "../lib/cache-store";
import { Answer, RequestAnswer } from "../types/answer";
import { QuizQuestion } from "../types/quizQuestion";
import { combineNameWithDifficulty } from "./getRandomItem";

export const getAnswer = (requestAnswer: RequestAnswer): Answer | undefined => {
  const { topic, questionId } = requestAnswer;
  const topicName: string = getKeyByValue(topic.name);
  const topicDif: string = topic.difficulty;
  const renamed: string = combineNameWithDifficulty(topicName, topicDif);
  const targetQuestionsMap: Map<string, QuizQuestion> = allTopic[renamed];
  const targetQuestion = targetQuestionsMap.get(questionId);
  const answer: Answer = {
    answer: targetQuestion?.answer ?? "server error",
    questionId: targetQuestion?.questionId ?? "server error",
    reason: targetQuestion?.reason ?? "server error",
  };

  return answer;
};
