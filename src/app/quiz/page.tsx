"use client";
import { useMounted } from "@/src/hooks/useMounted";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { fetchQuiz, Quiz } from "@/src/utils/quiz_client/quiz_api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
    if (mounted)
      fetchQuiz({ quiz })
        .then((quiz) => setQuestion(quiz))
        .then(() => {
          router.push("/quiz/1");
        });
  }, [mounted]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="m-auto rounded-2xl bg-white/10 p-8 font-bold backdrop-blur-xl sm:text-3xl">
        <DotLottieReact
          className="w-100"
          src="/lottie/truck_delivering.lottie"
          loop
          autoplay
        />
        <span className="text-white">Delivering question for you</span>
        <span className="loading loading-dots sm:loading-xl loading-sm ml-4 text-white"></span>
      </h1>
    </div>
  );
}
