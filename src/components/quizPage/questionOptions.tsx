import { QuizQuestion } from "@/src/types/quizQuestion";

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
  const btnBlockStyle = isOptionLessThan3Character && "p-6";
  const getOptionStyle = (option: string) => {
    if (!isSubmit)
      return option === selectedAnswer ? "bg-info! text-white! scale-105" : "";

    if (option === answer) return "bg-green-300! text-shadow-gray-700!";

    if (option === selectedAnswer && option !== answer)
      return "bg-red-400! text-shadow-gray-700!";

    return "";
  };

  const handleSelected = (option: string) => {
    if (!isSubmit) setSetselectedAnswer(option);
  };

  return (
    <section
      className={`flex flex-col space-y-3 rounded-xl p-3 ${isSubmit && "pointer-events-none"} ${isOptionLessThan3Character && "grid grid-cols-2 grid-rows-2 gap-6"}`}
    >
      {question.options.map((option: string, index: number) => (
        <button
          onClick={() => handleSelected(option)}
          className={`${getOptionStyle(option)} ${btnBlockStyle} relative h-full w-full rounded-lg border-0 bg-gray-600 p-2 text-lg font-medium text-white/90 hover:scale-105 hover:cursor-pointer hover:bg-gray-500 hover:text-white`}
          key={option}
        >
          <span className="mr-2 text-gray-100">{indexOrder[index]}</span>{" "}
          {option}
        </button>
      ))}
    </section>
  );
}
