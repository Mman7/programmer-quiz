"use client";

import InfiniteLoading from "@/src/components/infiniteLoading";
import QuestionSection from "@/src/components/quizPage/questionSection";
import { useMounted } from "@/src/hooks/useMounted";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { QuizQuestion } from "@/src/types/quizQuestion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const [question, setQuestion] = useState<QuizQuestion>();
  const { questions, setLastQuestionIndex } = useQuizGame();
  const mounted = useMounted();
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    // Load question from zustand
    setQuestion(questions[id]);
    setLastQuestionIndex(id);
  }, [mounted]);

  if (question === undefined) {
    return <InfiniteLoading className="size-20 bg-white" />;
  }
  return (
    <div className="m-auto flex max-w-6xl flex-col justify-center sm:min-w-2xl xl:min-w-4xl">
      <QuestionSection question={question} />
    </div>
  );
}
