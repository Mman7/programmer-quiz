"use client";

import QuestionSection from "@/src/components/quizPage/questionSection";
import { useMounted } from "@/src/hooks/useMounted";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { QuestionWithoutAnswer, QuizQuestion } from "@/src/types/quizQuestion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const [question, setQuestion] = useState<
    QuizQuestion | QuestionWithoutAnswer | undefined
  >();
  const { questions } = useQuizGame();
  const mounted = useMounted();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setQuestion(questions[id]);
  }, [mounted]);

  if (question === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-auto max-w-6xl md:min-w-3xl">
      <QuestionSection question={question} />
    </div>
  );
}
