"use client";
import { useMounted } from "@/src/hooks/useMounted";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { fetchQuiz, Quiz } from "@/src/utils/quiz_client/quiz_api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function QuizPage() {
  const { numberOfQuiz, topics } = useQuizOption();
  const { setQuestion } = useQuizGame();
  const router = useRouter();
  const mounted = useMounted();

  const quiz: Quiz = {
    numberOfQuiz: numberOfQuiz,
    topics: topics,
  };

  useEffect(() => {
    if (mounted) fetchQuiz({ quiz }).then((quiz) => setQuestion(quiz));
    router.push("/quiz/1");
  }, [mounted]);

  return <></>;
}
