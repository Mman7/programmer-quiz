import { QuizQuestion } from "@/src/types/quizQuestion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QuestionOptions from "./questionOptions";
import TopicBadge from "../topicBadge/topicBadge";
import { Topic } from "@/src/types/topic";
import { getQuizAnswer } from "@/src/utils/quiz_client/quiz_api";
import { Answer, RequestAnswer } from "@/src/types/answer";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import CheckCorrect from "./showCorrect";
import NavigationButton from "./navigationButton";

interface QuestionSectionProps {
  question: QuizQuestion;
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  const [selectedAnswer, setSetselectedAnswer] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const { updateQuestionFromArray, questions } = useQuizGame();
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const topic: Topic = {
    name: question.topic,
    difficulty: question.difficulty,
  };

  const submitAnswer = async () => {
    const request: RequestAnswer = {
      questionId: question.questionId,
      topic: { difficulty: question.difficulty, name: question.topic },
    };
    const response: Answer = await getQuizAnswer({ req: request }).then(
      (res) => {
        return res;
      },
    );
    const newQuestion: QuizQuestion = {
      ...question,
      userAnswer: selectedAnswer,
      reason: response.reason,
      answer: response.answer,
    };

    updateQuestionFromArray(newQuestion, id);
    setAnswer(response.answer);
    setReason(response.reason);
    setIsSubmit(true);
  };

  // Load previous data
  useEffect(() => {
    if (question.answer) setAnswer(question.answer);
    if (question.userAnswer) setSetselectedAnswer(question.userAnswer);
    if (question.userAnswer) setIsSubmit(true);
    if (question.reason) setReason(question.reason);
  }, []);

  return (
    <div className="m-auto w-full p-3">
      <h1 className="p-2.5 text-center text-3xl font-bold">Quiz Game</h1>
      <section className="w-full flex-col rounded-xl bg-white/40 p-6 backdrop-blur-md">
        <h1 className="mb-2 text-2xl font-medium text-shadow-gray-600">
          {id}. {question.questionText}
        </h1>
        <TopicBadge topic={topic} className="max-w-30" />
        <QuestionOptions
          isSubmit={isSubmit}
          answer={answer}
          question={question}
          selectedAnswer={selectedAnswer}
          setSetselectedAnswer={setSetselectedAnswer}
        />
        <CheckCorrect
          isCorrect={answer === selectedAnswer}
          isSubmit={isSubmit}
        />
        <h2
          className={`${isSubmit && "block!"} my-2 hidden rounded-lg bg-white/60 p-4 font-medium`}
        >
          <p className="text-lg">
            <span className="mr-2">Reason:</span>
            {reason}
          </p>
        </h2>
        <button
          onClick={() => (selectedAnswer !== "" ? submitAnswer() : "")}
          className={`btn ${selectedAnswer !== "" && "btn-info"} ${selectedAnswer === "" && "cursor-not-allowed"} ${isSubmit && "bg-sky-400 text-gray-800"} btn-outline mt-3 w-full`}
        >
          Check Answer!
        </button>
      </section>
      {isSubmit && id == questions.length - 1 && (
        <button
          onClick={() => router.push("/")}
          className={`${isSubmit && "visible"} btn btn-secondary btn-outline btn-block invisible mt-3 flex-1`}
        >
          Back To Home Page
        </button>
      )}
      {isSubmit && id !== questions.length - 1 && (
        <NavigationButton isSubmit={isSubmit} />
      )}
    </div>
  );
}
