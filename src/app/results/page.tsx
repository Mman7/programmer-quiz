"use client";

import GoBackButton from "@/src/components/goBackButton";
import ResultQuestion from "@/src/components/resultQuestion";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { QuizQuestion } from "@/src/types/quizQuestion";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
  const { questions } = useQuizGame();

  const correctAnswers = questions.filter(
    (question) =>
      question.userAnswer !== undefined &&
      question.userAnswer === question.answer,
  ).length;

  const score = `${correctAnswers} / ${questions.length}`;

  return (
    <div className="h-full w-full p-4">
      <section className="flex justify-between">
        <GoBackButton />
        <h1 className="rounded-xl bg-white/10 px-4 py-1.5 text-2xl">
          {score}{" "}
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
        </h1>
      </section>
      {questions.map((item: QuizQuestion, index) => (
        <ResultQuestion key={index} question={item} index={index} />
      ))}
    </div>
  );
}
