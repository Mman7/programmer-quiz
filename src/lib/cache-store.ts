import { QuizQuestion } from "../types/quizQuestion";

export type TopicMap = {
  [key: string]: Map<string, QuizQuestion>;
};

// PATH
const cpp_easy: QuizQuestion[] = require("@/src/data/cpp_easy.json");
const js_easy: QuizQuestion[] = require("@/src/data/js_easy.json");
const js_medium: QuizQuestion[] = require("@/src/data/js_medium.json");
const csharp_easy: QuizQuestion[] = require("@/src/data/csharp_easy.json");
const software_easy: QuizQuestion[] = require("@/src/data/softwaredev_easy.json");
const webdev_easy: QuizQuestion[] = require("@/src/data/webdev_easy.json");

// MAP
const cppEasyMap: Map<string, QuizQuestion> = new Map(
  cpp_easy.map((item) => [item.questionId, item]),
);
const jsEasyMap = new Map(js_easy.map((item) => [item.questionId, item]));
const jsMediumMap = new Map(js_medium.map((item) => [item.questionId, item]));

const csharpEasyMap: Map<string, QuizQuestion> = new Map(
  csharp_easy.map((item) => [item.questionId, item]),
);
const softwareEasyMap: Map<string, QuizQuestion> = new Map(
  software_easy.map((item) => [item.questionId, item]),
);
const webdevEasyMap: Map<string, QuizQuestion> = new Map(
  webdev_easy.map((item) => [item.questionId, item]),
);

export const allTopic: TopicMap[] = [
  { cpp_easy: cppEasyMap },
  { js_easy: jsEasyMap },
  { csharp_easy: csharpEasyMap },
  { software_easy: softwareEasyMap },
  { webdev_easy: webdevEasyMap },
  { js_medium: jsMediumMap },
];
