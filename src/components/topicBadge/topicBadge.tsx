"use client";

import { color } from "../../enum/topicBadgeColor";
import { Topic } from "@/src/types/topic";

export default function TopicBadge({
  topic,
  className,
}: {
  topic: Topic;
  className?: string;
}) {
  return (
    <button
      className={`${className} btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="">{topic.name}</h1>
    </button>
  );
}
