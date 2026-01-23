"use client";

import { useDifficultyModal } from "@/src/store/useDifficultyModalStore";
import { Topic } from "@/src/types/topic";

interface SelectDifficultyModalProps {
  chooseFn: (topic: Topic) => void;
}
export default function SelectDifficultyModal({
  chooseFn,
}: SelectDifficultyModalProps) {
  const { topicName, closeModal, modalOpenStatus } = useDifficultyModal();

  const chooseDifficulty = (difficulty: string) => {
    const topic: Topic = {
      name: topicName,
      difficulty: difficulty,
    };
    chooseFn(topic);
    closeModal();
  };

  return (
    <dialog open={modalOpenStatus} id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/*  close the modal */}
          <button
            onClick={() => closeModal()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <h3 className="mb-4 text-lg font-bold">
          Choose difficulty for {topicName}
        </h3>
        <section className="flex flex-col space-y-3">
          <button
            onClick={() => chooseDifficulty("easy")}
            className="btn btn-outline btn-success"
          >
            Easy
          </button>
          <button
            onClick={() => chooseDifficulty("medium")}
            className="btn btn-outline btn-warning"
          >
            Medium
          </button>
          <button
            onClick={() => chooseDifficulty("hard")}
            className="btn btn-outline btn-error"
          >
            Hard
          </button>
        </section>
      </div>
    </dialog>
  );
}
