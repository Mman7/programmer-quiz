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
import { useData } from "@/src/store/useDataStore";

interface QuestionSectionProps {
  question: QuizQuestion;
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  const [selectedAnswer, setSetselectedAnswer] = useState<string>("");
  const [reason, setReason] = useState<string | undefined>("");
  const [answer, setAnswer] = useState<string | undefined>(undefined);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const {
    updateQuestionFromArray,
    questions,
    isLastGameDataSaved,
    setisLastGameDataSaved,
  } = useQuizGame();
  const { addCorrectQuiz, updateTodayData } = useData();

  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const topic: Topic = {
    name: question.topic,
    difficulty: question.difficulty,
  };

  const submitAnswer = async () => {
    if (answer) return;
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

    updateQuestionFromArray(newQuestion, id - 1);
    setAnswer(response.answer);
    setReason(response.reason);
    setIsSubmit(true);
    if (id === questions.length) handleCompleted();
  };

  const handleCompleted = () => {
    if (isLastGameDataSaved) return;

    const correctAnswers: number = questions.filter(
      (question) =>
        question.userAnswer !== undefined &&
        question.userAnswer === question.answer,
    ).length;
    updateTodayData(correctAnswers);
    addCorrectQuiz(correctAnswers);
    setisLastGameDataSaved(true);
  };

  const toResultsPage = () => {
    router.push("/results");
  };

  // Load previous data
  useEffect(() => {
    if (questions[id - 1].answer === undefined) return;
    if (questions[id - 1].answer !== undefined) setAnswer(question.answer);
    if (questions[id - 1].userAnswer !== undefined)
      setSetselectedAnswer(questions[id - 1].userAnswer as string);
    if (questions[id - 1].answer !== undefined) setIsSubmit(true);
    if (questions[id - 1].reason !== undefined)
      setReason(questions[id - 1].reason);
  }, []);

  return (
    <div className="m-auto w-full p-3">
      <h1 className="mb-2 rounded-xl bg-white/10 p-1 text-center text-xl font-black backdrop-blur-xl">
        {id} / {questions.length}
      </h1>

      <section className="w-full flex-col rounded-xl bg-white/10 p-6 backdrop-blur-xl">
        <h1 className="mb-2 text-xl font-medium lg:text-2xl">
          <span>{id}. </span>
          <span className="mr-2">{question.questionText}</span>
          <TopicBadge topic={topic} className="my-1" />
        </h1>

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
          className={`${isSubmit && "block!"} my-2 hidden rounded-lg bg-white/10 p-4 font-medium`}
        >
          <p className="text-lg">
            <span className="mr-2">Reason:</span>
            <span className="text-gray-50">{reason}</span>
          </p>
        </h2>
        <button
          onClick={() => selectedAnswer !== "" && submitAnswer()}
          className={`btn ${selectedAnswer !== "" && "btn-info"} ${selectedAnswer === "" && "cursor-not-allowed"} ${isSubmit && "bg-sky-400 text-gray-800"} btn-outline mt-3 w-full`}
        >
          Check Answer!
        </button>
      </section>
      {isSubmit && id == questions.length && (
        <button
          onClick={() => toResultsPage()}
          className={`${isSubmit && "visible"} btn btn-secondary btn-outline btn-block invisible mt-3 mb-3 flex-1`}
        >
          Results
        </button>
      )}

      <NavigationButton isSubmit={isSubmit} />
    </div>
  );
}
