"use client";

import Topic from "@/src/types/topic";
import { usePathname } from "next/navigation";
import RemovableTopicBadge from "../topicBadge/removableTopicBadge";
import TopicBadge from "../topicBadge/topicBadge";

export default function SelectedTopic({ topic }: { topic: Topic }) {
  const pathname = usePathname();
  const isQuizPage = pathname == "/quiz" || pathname.startsWith("/quiz/");

  return isQuizPage ? (
    <TopicBadge topic={topic} />
  ) : (
    <RemovableTopicBadge topic={topic} />
  );
}
