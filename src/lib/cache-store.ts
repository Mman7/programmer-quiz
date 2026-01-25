import { QuizQuestion } from "../types/quizQuestion";

export interface TopicMap {
  [key: string]: Map<string, QuizQuestion>;
}

// Data imports for different difficulty levels and topics
// ! DOUBLE CHECK PATH
const cpp_easy: QuizQuestion[] = require("@/src/data/cpp_easy.json");
const cpp_medium: QuizQuestion[] = require("@/src/data/cpp_medium.json");
const cpp_hard: QuizQuestion[] = require("@/src/data/cpp_hard.json");
const js_easy: QuizQuestion[] = require("@/src/data/js_easy.json");
const js_medium: QuizQuestion[] = require("@/src/data/js_medium.json");
const js_hard: QuizQuestion[] = require("@/src/data/js_hard.json");
const csharp_easy: QuizQuestion[] = require("@/src/data/csharp_easy.json");
const csharp_medium: QuizQuestion[] = require("@/src/data/csharp_medium.json");
const csharp_hard: QuizQuestion[] = require("@/src/data/csharp_hard.json");
const software_easy: QuizQuestion[] = require("@/src/data/softwaredev_easy.json");
const software_medium: QuizQuestion[] = require("@/src/data/softwaredev_medium.json");
const software_hard: QuizQuestion[] = require("@/src/data/softwaredev_hard.json");
const webdev_easy: QuizQuestion[] = require("@/src/data/webdev_easy.json");
const webdev_medium: QuizQuestion[] = require("@/src/data/webdev_medium.json");
const webdev_hard: QuizQuestion[] = require("@/src/data/webdev_hard.json");
const react_easy: QuizQuestion[] = require("@/src/data/react_easy.json");
const react_medium: QuizQuestion[] = require("@/src/data/react_medium.json");
const react_hard: QuizQuestion[] = require("@/src/data/react_hard.json");
const typescript_easy: QuizQuestion[] = require("@/src/data/ts_easy.json");
const typescript_medium: QuizQuestion[] = require("@/src/data/ts_medium.json");
const typescript_hard: QuizQuestion[] = require("@/src/data/ts_hard.json");

// Maps for efficient question lookup by ID
const cppEasyMap: Map<string, QuizQuestion> = new Map(
  cpp_easy.map((item) => [item.questionId, item]),
);
const cppMediumMap: Map<string, QuizQuestion> = new Map(
  cpp_medium.map((item) => [item.questionId, item]),
);
const cppHardMap: Map<string, QuizQuestion> = new Map(
  cpp_hard.map((item) => [item.questionId, item]),
);

const jsEasyMap = new Map(js_easy.map((item) => [item.questionId, item]));
const jsMediumMap = new Map(js_medium.map((item) => [item.questionId, item]));
const jsHardMap = new Map(js_hard.map((item) => [item.questionId, item]));

const csharpEasyMap: Map<string, QuizQuestion> = new Map(
  csharp_easy.map((item) => [item.questionId, item]),
);
const csharpMediumMap: Map<string, QuizQuestion> = new Map(
  csharp_medium.map((item) => [item.questionId, item]),
);
const csharpHardMap: Map<string, QuizQuestion> = new Map(
  csharp_hard.map((item) => [item.questionId, item]),
);

const softwareEasyMap: Map<string, QuizQuestion> = new Map(
  software_easy.map((item) => [item.questionId, item]),
);
const softwareMediumMap: Map<string, QuizQuestion> = new Map(
  software_medium.map((item) => [item.questionId, item]),
);
const softwareHardMap: Map<string, QuizQuestion> = new Map(
  software_hard.map((item) => [item.questionId, item]),
);

const webdevEasyMap: Map<string, QuizQuestion> = new Map(
  webdev_easy.map((item) => [item.questionId, item]),
);
const webdevMediumMap: Map<string, QuizQuestion> = new Map(
  webdev_medium.map((item) => [item.questionId, item]),
);
const webdevHardMap: Map<string, QuizQuestion> = new Map(
  webdev_hard.map((item) => [item.questionId, item]),
);
const reactEasyMap: Map<string, QuizQuestion> = new Map(
  react_easy.map((item) => [item.questionId, item]),
);
const reactMediumMap: Map<string, QuizQuestion> = new Map(
  react_medium.map((item) => [item.questionId, item]),
);
const reactHardMap: Map<string, QuizQuestion> = new Map(
  react_hard.map((item) => [item.questionId, item]),
);
const typescriptEasyMap: Map<string, QuizQuestion> = new Map(
  typescript_easy.map((item) => [item.questionId, item]),
);
const typescriptMediumMap: Map<string, QuizQuestion> = new Map(
  typescript_medium.map((item) => [item.questionId, item]),
);
const typescriptHardMap: Map<string, QuizQuestion> = new Map(
  typescript_hard.map((item) => [item.questionId, item]),
);

/**
 * Collection of all topic maps organized by subject and difficulty level
 * Each topic map is structured as { [topicName]: Map<questionId, QuizQuestion> }
 * Topic names should match the TopicType enum keys for consistency
 */
export const allTopic: TopicMap = {
  cpp_easy: cppEasyMap,
  cpp_medium: cppMediumMap,
  cpp_hard: cppHardMap,
  javascript_easy: jsEasyMap,
  javascript_medium: jsMediumMap,
  javascript_hard: jsHardMap,
  csharp_easy: csharpEasyMap,
  csharp_medium: csharpMediumMap,
  csharp_hard: csharpHardMap,
  software_easy: softwareEasyMap,
  software_medium: softwareMediumMap,
  software_hard: softwareHardMap,
  webdev_easy: webdevEasyMap,
  webdev_medium: webdevMediumMap,
  webdev_hard: webdevHardMap,
  react_easy: reactEasyMap,
  react_medium: reactMediumMap,
  react_hard: reactHardMap,
  typescript_easy: typescriptEasyMap,
  typescript_medium: typescriptMediumMap,
  typescript_hard: typescriptHardMap,
};
