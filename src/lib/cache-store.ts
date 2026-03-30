import type { QuizQuestion } from "../types/quizQuestion";
import { mapValues } from "lodash-es";
import cpp_easy from "@/src/data/cpp_easy.json";
import cpp_medium from "@/src/data/cpp_medium.json";
import cpp_hard from "@/src/data/cpp_hard.json";
import js_easy from "@/src/data/js_easy.json";
import js_medium from "@/src/data/js_medium.json";
import js_hard from "@/src/data/js_hard.json";
import csharp_easy from "@/src/data/csharp_easy.json";
import csharp_medium from "@/src/data/csharp_medium.json";
import csharp_hard from "@/src/data/csharp_hard.json";
import software_easy from "@/src/data/softwaredev_easy.json";
import software_medium from "@/src/data/softwaredev_medium.json";
import software_hard from "@/src/data/softwaredev_hard.json";
import webdev_easy from "@/src/data/webdev_easy.json";
import webdev_medium from "@/src/data/webdev_medium.json";
import webdev_hard from "@/src/data/webdev_hard.json";
import react_easy from "@/src/data/react_easy.json";
import react_medium from "@/src/data/react_medium.json";
import react_hard from "@/src/data/react_hard.json";
import typescript_easy from "@/src/data/ts_easy.json";
import typescript_medium from "@/src/data/ts_medium.json";
import typescript_hard from "@/src/data/ts_hard.json";
import sql_easy from "@/src/data/sql_easy.json";
import sql_medium from "@/src/data/sql_medium.json";
import sql_hard from "@/src/data/sql_hard.json";

export interface TopicMap {
  [key: string]: Map<string, QuizQuestion>;
}

const topicData = {
  cpp_easy,
  cpp_medium,
  cpp_hard,
  javascript_easy: js_easy,
  javascript_medium: js_medium,
  javascript_hard: js_hard,
  csharp_easy,
  csharp_medium,
  csharp_hard,
  software_easy,
  software_medium,
  software_hard,
  webdev_easy,
  webdev_medium,
  webdev_hard,
  react_easy,
  react_medium,
  react_hard,
  typescript_easy,
  typescript_medium,
  typescript_hard,
  sql_easy,
  sql_medium,
  sql_hard,
} satisfies Record<string, QuizQuestion[]>;

function createQuestionMap(
  questions: QuizQuestion[],
): Map<string, QuizQuestion> {
  return new Map(questions.map((item) => [item.questionId, item]));
}

/**
 * Collection of all topic maps organized by subject and difficulty level
 * Each topic map is structured as { [topicName]: Map<questionId, QuizQuestion> }
 * Topic names should match the TopicType enum keys for consistency
 */
export const allTopic: TopicMap = mapValues(topicData, (questions) =>
  createQuestionMap(questions),
);
