"use client";
import { useStartModal } from "@/src/store/useStartModalStore";
import { SettingOpion } from "./settingOptions";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { useRouter } from "next/navigation";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { playSound } from "@/src/utils/playSound";
import { useLoading } from "@/src/store/useLoadingStore";

const questionNumber = [10, 20, 30];

export default function StartGameModal() {
  const router = useRouter();
  const { status, closeModal } = useStartModal();
  const { clearQuestion } = useQuizGame();
  const { numberOfQuiz, topics } = useQuizOption();
  const { isLoading, setLoading } = useLoading();

  const startHandler = () => {
    playSound("pressed");
    clearQuestion();
    setLoading(true);
    router.push("/quiz");
    closeModal();
  };

  const checkOptionValid = () => {
    if (
      numberOfQuiz !== 0 &&
      topics.length !== 0 &&
      questionNumber.includes(numberOfQuiz)
    )
      return true;
  };

  return (
    <dialog id="my_modal_3" open={status} className="modal">
      <div className="modal-box bg-white/5 backdrop-blur-3xl">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => closeModal()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <h3 className="text-xl font-bold">Hold Up!</h3>
        <p className="text-gray-00">Customize some settings</p>
        <SettingOpion />
        <button
          disabled={!checkOptionValid() || isLoading}
          onMouseEnter={() => playSound("uiHover")}
          onClick={() => startHandler()}
          className="btn btn-block btn-outline btn-primary mt-4"
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Start Quiz!"
          )}
        </button>
      </div>
    </dialog>
  );
}
