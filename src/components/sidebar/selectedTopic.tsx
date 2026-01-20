"use client";

import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import Topic from "@/src/types/topic";
import { usePathname } from "next/navigation";

const color: any = {
  easy: "btn-success",
  medium: "btn-warning",
  hard: "btn-error",
};

export default function SelectedTopic({ topic }: { topic: Topic }) {
  const { removeTopic } = useQuizOption();
  const pathname = usePathname();
  const isQuizPage = pathname == "/quiz";

  const handleRemove = () => {
    removeTopic(topic);
  };

  return isQuizPage ? (
    <button
      className={`btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="">{topic.name}</h1>
    </button>
  ) : (
    <button
      onClick={() => handleRemove()}
      className={`btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="-mr-3 group-hover:mr-0">{topic.name}</h1>
      <h1 className="invisible transition-all duration-75! group-hover:visible">
        X
      </h1>
    </button>
  );
}
