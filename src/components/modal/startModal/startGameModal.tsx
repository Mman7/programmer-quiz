"use client";
import { useStartModal } from "@/src/store/useStartModalStore";
import { SettingOpion } from "./settingOptions";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { useRouter } from "next/navigation";

const questionNumber = [10, 20, 30];

export default function StartGameModal() {
  const { status, closeModal } = useStartModal();
  const router = useRouter();
  const { numberOfQuiz, topics } = useQuizOption();

  const startHandler = () => {
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
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => closeModal()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">Hold Up!</h3>
        <p className="text-gray-400">Customize some settings</p>
        <SettingOpion />
        <button
          disabled={!checkOptionValid()}
          onClick={() => startHandler()}
          className="btn btn-block btn-outline btn-primary mt-4"
        >
          Start Quiz!
        </button>
      </div>
    </dialog>
  );
}
