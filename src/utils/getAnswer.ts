import { getKeyByValue } from "../enum/topicTypes";
import { allTopic } from "../lib/cache-store";
import { Answer, RequestAnswer } from "../types/answer";
import { QuizQuestion } from "../types/quizQuestion";
import { combineNameWithDifficulty } from "./getRandomItem";

/**
 * Retrieves the answer for a given quiz question based on topic and question ID
 * @param requestAnswer - The request object containing topic and question ID
 * @returns The answer object or undefined if not found
 */
export const getAnswer = (requestAnswer: RequestAnswer): Answer | undefined => {
  // Extract topic and questionId from the request
  const { topic, questionId } = requestAnswer;

  // Convert topic name enum value to string key
  const topicName: string = getKeyByValue(topic.name);

  // Get the difficulty level from the topic
  const topicDif: string = topic.difficulty;

  // Combine topic name and difficulty to create a unique identifier
  const renamed: string = combineNameWithDifficulty(topicName, topicDif);

  // Retrieve the map of questions for the specified topic and difficulty
  const targetQuestionsMap: Map<string, QuizQuestion> = allTopic[renamed];

  // Get the specific question from the map using the question ID
  const targetQuestion = targetQuestionsMap.get(questionId);

  // Create and return the answer object with fallback values
  const answer: Answer = {
    answer: targetQuestion?.answer ?? "server error",
    questionId: targetQuestion?.questionId ?? "server error",
    reason: targetQuestion?.reason ?? "server error",
  };

  return answer;
};
