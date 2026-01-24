import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useParams, useRouter } from "next/navigation";

export default function NavigationButton({ isSubmit }: { isSubmit: boolean }) {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const { questions } = useQuizGame();

  const handleNextQuestion = () => {
    router.push(`${id + 1}`);
  };

  const handleGoBack = () => {
    router.push(`${id - 1}`);
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={() => handleGoBack()}
        className={`${isSubmit && "visible"} ${id === 1 && "hidden"} btn btn-secondary btn-outline invisible flex-1 backdrop-blur-2xl`}
      >
        Go back!
      </button>
      <button
        onClick={() => handleNextQuestion()}
        className={`${isSubmit && "visible"} ${id === questions.length && "hidden"} btn btn-secondary btn-outline invisible flex-1 backdrop-blur-2xl`}
      >
        Next!
      </button>
    </div>
  );
}
