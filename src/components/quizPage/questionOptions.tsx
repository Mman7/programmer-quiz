import { QuestionWithoutAnswer, QuizQuestion } from "@/src/types/quizQuestion";

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
  const isOptionLessThan5Character: boolean = question.options[0].length < 5;

  return (
    <section
      className={`flex flex-col space-y-3 rounded-xl bg-white/60 p-4 ${isOptionLessThan5Character && "grid grid-cols-2 grid-rows-2 gap-4"}`}
    >
      {question.options.map((option: string, index: number) => (
        <button
          onClick={() => setSetselectedAnswer(option)}
          className={`${answer === selectedAnswer && "green-300 text-shadow-gray-700!"} ${selectedAnswer === option && "bg-info"} btn btn-neutral w-full border-0 bg-gray-600 text-xl transition-all! duration-100! hover:animate-pulse`}
          key={option}
        >
          {indexOrder[index]} {option}
        </button>
      ))}
    </section>
  );
}
