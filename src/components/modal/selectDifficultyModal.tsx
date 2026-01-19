"use client";

import Topic from "@/src/types/topic";
import { useDifficultyModalStore } from "@/src/store/useDifficultyModalStore";
import { useSelectedTopicsStore } from "@/src/store/useSelectedTopicsStore";

export default function SelectDifficultyModal() {
  const difficultyModalStore = useDifficultyModalStore();
  const selectedTopicsStore = useSelectedTopicsStore();
  const chooseDifficulty = (difficulty: string) => {
    const topic: Topic = {
      name: difficultyModalStore.topicName,
      difficulty: difficulty,
    };
    selectedTopicsStore.addTopic(topic);
    difficultyModalStore.closeModal();
  };

  return (
    <dialog
      open={difficultyModalStore.modalOpenStatus}
      id="my_modal_3"
      className="modal"
    >
      <div className="modal-box">
        <form method="dialog">
          {/*  close the modal */}
          <button
            onClick={() => difficultyModalStore.closeModal()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <h3 className="mb-4 text-lg font-bold">
          Choose difficulty for {difficultyModalStore.topicName}
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
