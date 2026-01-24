"use client";

import GoBackButton from "@/src/components/goBackButton";
import ResultQuestion from "@/src/components/resultQuestion";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { QuizQuestion } from "@/src/types/quizQuestion";

export default function Page() {
  const { questions } = useQuizGame();
  return (
    <div className="h-full w-full p-4">
      <GoBackButton />
      {questions.map((item: QuizQuestion, index) => (
        <ResultQuestion key={index} question={item} index={index} />
      ))}
    </div>
  );
}
