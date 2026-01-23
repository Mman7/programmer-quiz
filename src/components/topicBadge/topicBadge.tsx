"use client";

import React from "react";
import { color } from "../../enum/topicBadgeColor";
import Topic from "../../types/topic";

export default function TopicBadge({ topic }: { topic: Topic }) {
  return (
    <button
      className={`btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="">{topic.name}</h1>
    </button>
  );
}
