import { QuizQuestion } from "@/src/types/quizQuestion";
import { playHoverSound } from "@/src/utils/playSound";

const indexOrder: string[] = ["A.", "B.", "C.", "D."];

interface QuestionOptionsProps {
  question: QuizQuestion;
  isSubmit: boolean;
  answer: string | undefined;
  selectedAnswer: string;
  setSetselectedAnswer: (option: string) => void;
}

export default function QuestionOptions({
  isSubmit,
  question,
  answer,
  selectedAnswer,
  setSetselectedAnswer,
}: QuestionOptionsProps) {
  const isOptionLessThan3Character: boolean = question.options[0].length < 3;
  const btnBlockStyle = isOptionLessThan3Character;
  const getOptionStyle = (option: string) => {
    if (!isSubmit)
      return option === selectedAnswer ? "bg-info! text-white! scale-105" : "";

    if (option === answer) return "bg-green-400! text-shadow-gray-700! ";

    if (option === selectedAnswer && option !== answer)
      return "bg-red-400! text-shadow-gray-700! shaky-animation";

    return "";
  };

  const handleSelected = (option: string) => {
    if (!isSubmit) setSetselectedAnswer(option);
  };

  return (
    <section
      className={`mt-4 flex flex-col space-y-3 rounded-xl ${isSubmit && "pointer-events-none"} ${isOptionLessThan3Character && "grid grid-cols-2 grid-rows-2 gap-6"}`}
    >
      {question.options.map((option: string, index: number) => (
        <button
          onMouseEnter={() => playHoverSound()}
          onClick={() => handleSelected(option)}
          className={`${getOptionStyle(option)} ${btnBlockStyle} relative h-full w-full rounded-lg border-0 bg-gray-600 p-2.5 text-lg font-medium text-white/90 hover:scale-105 hover:cursor-pointer hover:bg-gray-500 hover:text-white`}
          key={option}
        >
          <span className="mr-2 text-white">{indexOrder[index]}</span>{" "}
          <span className="text-white">{option}</span>
        </button>
      ))}
    </section>
  );
}
