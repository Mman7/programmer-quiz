"use client";

import { useSelectedTopicsStore } from "@/src/store/useSelectedTopicsStore";
import Topic from "@/src/types/topic";

const color: any = {
  easy: "badge-success",
  medium: "badge-warning",
  hard: "badge-error",
};

export default function SelectedTopic({ topic }: { topic: Topic }) {
  const selectedTopicsStore = useSelectedTopicsStore();

  const handleRemove = () => {
    selectedTopicsStore.removeTopic(topic);
  };

  return (
    <div
      className={`badge badge-outline group transition-all ${color[topic.difficulty]}`}
    >
      <h1> {topic.name}</h1>
      <button
        onClick={() => handleRemove()}
        className="cursor-pointer md:hidden md:group-hover:block"
      >
        X
      </button>
    </div>
  );
}
