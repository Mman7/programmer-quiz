import { useQuizOption } from "../store/useSelectedTopicsStore";
import { useStartModal } from "../store/useStartModalStore";

export default function StartQuizButton() {
  const { openModal } = useStartModal();
  const { topics } = useQuizOption();

  return (
    <button
      onClick={() => openModal()}
      className={`${topics.length < 1 && "btn-disabled"} btn btn-block btn-outline btn-primary mt-1.5`}
    >
      Start Quiz!
    </button>
  );
}
