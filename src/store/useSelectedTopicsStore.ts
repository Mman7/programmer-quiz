"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Topic } from "../types/topic";

interface TopicsState {
  topics: Topic[];
  numberOfQuiz: number;
  setQuizNumber: (value: number) => void;
  addTopic: (newTopic: Topic) => void;
  clearTopic: () => void;
  removeTopic: (topicToRemove: Topic) => void;
}

const useQuizOptionStore = create<TopicsState>()(
  persist(
    (set) => ({
      topics: [],
      numberOfQuiz: 0,
      setQuizNumber: (value: number) => set(() => ({ numberOfQuiz: value })),
      addTopic: (newTopic) =>
        set(({ topics }) => {
          const updatedTopics = cleanDuplicates(topics, newTopic);
          return { topics: updatedTopics };
        }),
      clearTopic: () => {
        set(() => ({ topics: [] }));
      },
      removeTopic: (topicToRemove: Topic) => {
        set(({ topics }) => ({
          // filter out the topic to remove
          topics: topics.filter((topic: Topic) => topic !== topicToRemove),
        }));
      },
    }),
    { name: "store-quiz-option" },
  ),
);

const cleanDuplicates = (array: Topic[], newTopic: Topic) => {
  // check is there is already a topic with the same name and difficulty
  const existingTopicIndex: number = array.findIndex(
    (topic) =>
      topic.name === newTopic.name && topic.difficulty === newTopic.difficulty,
  );
  // if not found, return the array with the new topic added
  if (existingTopicIndex === -1) return [...array, newTopic];
  // else, return the array without the existing topic
  return array;
};

export const useQuizOption = () => {
  const quizState = useQuizOptionStore((state) => state);
  return {
    numberOfQuiz: quizState.numberOfQuiz,
    setQuizNumber: quizState.setQuizNumber,
    topics: quizState.topics,
    addTopic: quizState.addTopic,
    removeTopic: quizState.removeTopic,
    clearTopic: quizState.clearTopic,
  };
};
