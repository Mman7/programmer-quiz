"use client";

import { create } from "zustand";
import Topic from "../types/topic";
import { persist } from "zustand/middleware";
import { querystring } from "zustand-querystring";

interface TopicsState {
  topics: Topic[];
  addTopic: (newTopic: Topic) => void;
  removeAll: () => void;
  removeTopic: (topicToRemove: Topic) => void;
}

export const useSelectedTopicsStore = create<TopicsState>()(
  querystring((set) => ({
    topics: [],
    addTopic: (newTopic) =>
      set((state) => {
        const updatedTopics = cleanDuplicates(state.topics, newTopic);
        return { topics: updatedTopics };
      }),
    removeAll: () => {
      set((state) => ({ topics: [] }));
    },
    removeTopic: (topicToRemove: Topic) => {
      set((state) => ({
        // filter out the topic to remove
        topics: state.topics.filter((topic: Topic) => topic !== topicToRemove),
      }));
    },
  })),
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

// get the selected topics
export const useSelectedTopics = () =>
  useSelectedTopicsStore((state) => state.topics);
