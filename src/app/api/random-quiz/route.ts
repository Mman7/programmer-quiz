import { allTopic, TopicMap } from "@/src/lib/cache-store";
import QuizGameOption from "@/src/types/quizGameOptions";
import {
  combineMapInArray,
  filterOutTopic,
  getRandomQuestion,
} from "@/src/utils/getRandomItem";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: QuizGameOption = await request.json();
  const { numberOfQuiz, topics } = body;

  // filter out selected topic
  const filterSelectedTopic: TopicMap[] = filterOutTopic({
    selectedTopics: topics,
    allTopic: allTopic,
  });

  // Combine QuizMap which selected
  const combinedMap = combineMapInArray(filterSelectedTopic);

  // get random question
  const randomQuestion = getRandomQuestion(combinedMap, numberOfQuiz);

  return NextResponse.json(randomQuestion);
}
