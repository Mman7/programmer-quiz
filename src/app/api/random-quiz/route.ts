import { allTopic } from "@/src/lib/cache-store";
import QuizGameOption from "@/src/types/quizGameOptions";
import { QuizQuestion } from "@/src/types/quizQuestion";
import {
  combineMapInArray,
  filterOutTopic,
  getRandomQuestion,
} from "@/src/utils/getRandomItem";
import { NextResponse } from "next/server";

export type TopicMap = {
  [key: string]: Map<string, QuizQuestion>;
};

export async function POST(request: Request) {
  const body: QuizGameOption = await request.json();
  const { numberOfQuiz, topics } = body;
  // filter out selected topic
  const filteredTopicList = filterOutTopic({
    selectedTopics: topics,
    allTopic: allTopic,
  });
  // Combine QuizMap which selected
  const combinedMap = combineMapInArray(filteredTopicList);
  // get random question
  const randomQuestion = getRandomQuestion(
    combinedMap as Map<string, QuizQuestion>,
    numberOfQuiz,
  );

  return NextResponse.json(randomQuestion);
}
