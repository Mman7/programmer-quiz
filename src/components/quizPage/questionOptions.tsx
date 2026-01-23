import { QuestionWithoutAnswer, QuizQuestion } from "@/src/types/quizQuestion";
import { useState } from "react";

const indexOrder: string[] = ["A.", "B.", "C.", "D."];

interface QuestionOptionsProps {
  question: QuizQuestion | QuestionWithoutAnswer;
  answer: string;
  selectedAnswer: string;
  setSetselectedAnswer: (option: string) => void;
}

export default function QuestionOptions({
  question,
  answer,
  selectedAnswer,
  setSetselectedAnswer,
}: QuestionOptionsProps) {
  const isOptionLessThan3Character: boolean = question.options[0].length < 3;
  const btnBlockStyle = isOptionLessThan3Character && "p-6";
  const selected = (option: string) =>
    selectedAnswer === option && "bg-primary! text-white! scale-105";
  const correctAnswer =
    answer === selectedAnswer && "green-300 text-shadow-gray-700!";

  const handleSelected = (option: string) => {
    setSetselectedAnswer(option);
  };

  return (
    <section
      className={`flex flex-col space-y-3 rounded-xl p-3 ${isOptionLessThan3Character && "grid grid-cols-2 grid-rows-2 gap-6"}`}
    >
      {question.options.map((option: string, index: number) => (
        <button
          onClick={() => handleSelected(option)}
          className={`${correctAnswer} ${btnBlockStyle} ${selected(option)} h-full w-full rounded-lg border-0 bg-gray-600 p-3 text-lg font-medium text-white/90 hover:scale-105 hover:cursor-pointer hover:bg-gray-500 hover:text-white`}
          key={option}
        >
          {indexOrder[index]} {option}
        </button>
      ))}
    </section>
  );
}
