"use client";

import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "./selectedTopic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { ModelName, useConfirmModal } from "@/src/store/useComfirmModalStore";

export default function Sidebar() {
  const { topics, clearTopic } = useQuizOption();
  const pathname = usePathname();
  const isQuizPage = pathname == "/quiz" || pathname.startsWith("/quiz/");
  const { questions } = useQuizGame();
  const { setModalName } = useConfirmModal();

  const showConfirmModal = () => {
    setModalName(ModelName.removeTopicModal);
  };

  return (
    <>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-100 flex min-h-full w-80 p-4">
        <section className="flex items-center justify-between">
          <h1 className="mb-3 text-xl font-bold text-black">Topics includes</h1>
          {!isQuizPage && (
            <button
              onClick={() =>
                questions.length > 0 ? showConfirmModal() : clearTopic()
              }
              className="btn btn-ghost btn-circle border-0 hover:bg-gray-200"
            >
              <FontAwesomeIcon
                size="xl"
                className="text-black"
                icon={faTrash}
              />
            </button>
          )}
        </section>
        <section className="my-1 flex flex-row flex-wrap gap-3 rounded-xl bg-gray-100/50 p-3">
          {topics.map((item, index) => (
            <SelectedTopic topic={item} key={index} />
          ))}
        </section>
      </div>
    </>
  );
}
