import { TopicMap } from "../app/api/random_quiz/route";
import { QuizQuestion, QuestionWithoutAnswer } from "../types/quizQuestion";
import { getKeyByValue } from "@enum/topicTypes";
import Topic from "../types/topic";

interface filterOutTopicProps {
  selectedTopics: Topic[];
  allTopic: TopicMap[];
}
// combine name to get same key as TopicType enum
const combineNameWithDifficulty = (name: string, difficulty: string) =>
  `${name}_${difficulty}`;

const renamedTopicsList = (array: Topic[]): string[] => {
  const newList = array.map((item: Topic) => {
    const topicKey = getKeyByValue(item.name);
    if (topicKey === undefined) {
      throw new Error(`Topic key not found for topic name: ${item.name}`);
    }
    return combineNameWithDifficulty(topicKey, item.difficulty);
  });

  return newList;
};

/**
 * Filter out the unnecessary TopicMap and return Arrays of TopicMap
 */
export const filterOutTopic = ({
  selectedTopics,
  allTopic,
}: filterOutTopicProps) => {
  // All topics can only access with specific name like "js_easy, webdev_easy"
  const topicsList: string[] = renamedTopicsList(selectedTopics);

  // find the common in all topic and selected topic
  const common: TopicMap[] = allTopic.filter((item) =>
    topicsList.some((b) => b === Object.keys(item)[0]),
  );
  return common;
};

export const combineMapInArray = (
  arrayOfMap: TopicMap[],
): Map<string, QuizQuestion> => {
  const flatmap: Map<string, QuizQuestion>[] = arrayOfMap.flatMap(
    (item) => item[`${Object.keys(item)}`],
  );
  const combinedMap = new Map(flatmap.flatMap((m) => [...m]));
  return combinedMap;
};

export const getRandomQuestion = (
  selectedQuestionMap: Map<string, QuizQuestion>,
  max?: number,
): QuestionWithoutAnswer[] => {
  const keys = Array.from(selectedQuestionMap.keys());
  const randomKeys: string[] = [];

  // Get up to 'max' random keys (or all keys if max is not specified)
  const count = max ? Math.min(max, keys.length) : keys.length;

  // Ensure we don't pick more items than available
  if (count <= 0) return [];

  // Pick random keys without repetition
  const availableKeys = [...keys];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * availableKeys.length);
    randomKeys.push(availableKeys.splice(randomIndex, 1)[0]);
  }

  const randomQuestion = randomKeys
    .map((key) => selectedQuestionMap.get(key))
    .filter((item) => item !== undefined);

  const removeAnswerQuestions = randomQuestion.map((item: QuizQuestion) =>
    removeAnswerAndReason(item),
  );

  return removeAnswerQuestions;
};

export const removeAnswerAndReason = (
  question: QuizQuestion,
): QuestionWithoutAnswer => {
  const { answer, reason, ...rest } = question;
  return { ...rest };
};
