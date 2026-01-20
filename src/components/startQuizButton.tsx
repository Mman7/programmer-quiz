import { useStartModal } from "../store/useStartModalStore";

export default function StartQuizButton() {
  const { openModal } = useStartModal();

  return (
    <button
      onClick={() => openModal()}
      className="btn btn-block btn-outline btn-primary"
    >
      Start Quiz!
    </button>
  );
}
