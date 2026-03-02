"use client";
import { useMounted } from "@/src/hooks/useMounted";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { fetchQuiz, Quiz } from "@/src/utils/quiz_client/quiz_api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useLoading } from "@/src/store/useLoadingStore";
import ShowLoading from "@/src/components/showLoading";

export default function QuizPage() {
  const { numberOfQuiz, topics } = useQuizOption();
  const { setQuestion } = useQuizGame();
  const router = useRouter();
  const mounted = useMounted();
  const { setLoading } = useLoading();

  const quiz: Quiz = {
    numberOfQuiz: numberOfQuiz,
    topics: topics,
  };

  useEffect(() => {
    if (mounted)
      fetchQuiz({ quiz })
        .then((quiz) => setQuestion(quiz))
        .then(() => {
          setLoading(false);
          router.push("/quiz/1");
        })
        .catch((error) => {
          console.error("Failed to fetch quiz, retrying...", error);
          fetchQuiz({ quiz })
            .then((quiz) => setQuestion(quiz))
            .then(() => {
              setLoading(false);
              router.push("/quiz/1");
            })
            .catch(() => {
              setLoading(false);
            });
        });
  }, [mounted]);

  return <ShowLoading />;
}
