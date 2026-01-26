"use client";

import { useDifficultyModal } from "@/src/store/useDifficultyModalStore";
import { Topic } from "@/src/types/topic";
import { playHoverSound, playPressedSound } from "@/src/utils/playSound";

interface SelectDifficultyModalProps {
  chooseFn: (topic: Topic) => void;
}
export default function SelectDifficultyModal({
  chooseFn,
}: SelectDifficultyModalProps) {
  const { topicName, closeModal, modalOpenStatus } = useDifficultyModal();

  const chooseDifficulty = (difficulty: string) => {
    playPressedSound();
    const topic: Topic = {
      name: topicName,
      difficulty: difficulty,
    };
    chooseFn(topic);
    closeModal();
  };

  return (
    <dialog open={modalOpenStatus} id="my_modal_3" className="modal">
      <div className="modal-box bg-white/10 backdrop-blur-2xl">
        <form method="dialog">
          {/*  close the modal */}
          <button
            onMouseEnter={() => playHoverSound()}
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
            onMouseEnter={() => playHoverSound()}
            onClick={() => chooseDifficulty("easy")}
            className="btn btn-outline btn-success"
          >
            Easy
          </button>
          <button
            onMouseEnter={() => playHoverSound()}
            onClick={() => chooseDifficulty("medium")}
            className="btn btn-outline btn-warning"
          >
            Medium
          </button>
          <button
            onMouseEnter={() => playHoverSound()}
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
