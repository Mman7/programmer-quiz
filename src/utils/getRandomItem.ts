import { QuizQuestion } from "../types/quizQuestion";
import { TopicMap } from "../lib/cache-store";
import { Topic } from "../types/topic";
import { getKeyByValue, getValueByKey } from "../enum/topicTypes";

interface filterOutTopicProps {
  selectedTopics: Topic[];
  allTopic: TopicMap;
}
// combine name to get same key as TopicType enum
export const combineNameWithDifficulty = (name: string, difficulty: string) =>
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
  const allTopicKey = Object.keys(allTopic);
  const newList = allTopicKey.filter((item) =>
    topicsList.some((b) => {
      return item === b;
    }),
  );
  const getItem = newList.map((item) => [allTopic[item]]);
  return getItem; // find the common in all topic and selected topic
};

export const combineMapInArray = (arrayOfMap: any) => {
  const combineMap = arrayOfMap.flatMap(
    (item: any) => item[`${Object.keys(item)}`],
  );
  const combinedMap = new Map(combineMap.flatMap((m: any) => [...m]));
  return combinedMap;
};

const removeAnswerAndReason = (question: QuizQuestion): QuizQuestion => {
  const { answer, reason, ...rest } = question;
  return { ...rest };
};

const returnTopicName = (key: string) => {
  return getValueByKey(key);
};

export const getRandomQuestion = (
  selectedQuestionMap: Map<string, QuizQuestion>,
  max?: number,
): QuizQuestion[] => {
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

  const randomQuestion: QuizQuestion[] = randomKeys
    .map((key) => selectedQuestionMap.get(key))
    .filter((item) => item !== undefined);
  const removeAnswerQuestions = randomQuestion.map((item: QuizQuestion) => {
    return removeAnswerAndReason(item);
  });

  const newList = removeAnswerQuestions.map((item) => {
    return {
      ...item,
      topic: returnTopicName(item.topic),
    };
  });
  return newList;
};
