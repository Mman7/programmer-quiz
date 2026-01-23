import { QuizQuestion } from "@/src/types/quizQuestion";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import QuestionOptions from "./questionOptions";

interface QuestionSectionProps {
  question: QuizQuestion;
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  const [selectedAnswer, setSetselectedAnswer] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const submitAnswer = () => {
    //TODO finish this function
  };

  const handleNextQuestion = () => {
    router.push(`${id + 1}`);
  };

  return (
    <div className="m-auto w-full p-3">
      <h1 className="p-2.5 text-center text-3xl font-bold">Quiz Game</h1>
      <section className="rounded-xl bg-white/50 p-6 backdrop-blur-md">
        <h1 className="mb-6 text-2xl font-medium text-shadow-gray-600">
          {id}. {question.questionText}
        </h1>

        <QuestionOptions
          answer={answer}
          question={question}
          selectedAnswer={selectedAnswer}
          setSetselectedAnswer={setSetselectedAnswer}
        />

        <h1
          className={`${isSubmit && "visible"} ${answer === selectedAnswer ? "text-green-300" : "text-red-400"} v invisible my-2 rounded-xl bg-white/60 p-4 font-bold`}
        >
          {answer === selectedAnswer
            ? "Answer is correct 👍"
            : "Answer is wrong, you almost get it 😁"}
        </h1>
        <p className={`${isSubmit && "block"} hidden font-medium`}>
          Reason:
          {reason}
        </p>
        <button
          onClick={() => submitAnswer()}
          className="btn btn-info btn-outline mt-3 w-full"
        >
          Check Answer!
        </button>
      </section>
      <button
        onClick={() => handleNextQuestion()}
        className={`${isSubmit && "visible"} btn btn-secondary btn-outline invisible mt-3 w-full`}
      >
        Next!
      </button>
    </div>
  );
}
