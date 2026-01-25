"use client";

import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "./selectedTopic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { ModelName, useConfirmModal } from "@/src/store/useComfirmModalStore";
import Link from "next/link";

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
          <h1 className="text-xl font-bold">Topics includes</h1>
          {!isQuizPage && (
            <button
              onClick={() =>
                questions.length > 0 ? showConfirmModal() : clearTopic()
              }
              className="btn btn-ghost btn-circle border-0 hover:bg-gray-200/15"
            >
              <FontAwesomeIcon
                size="xl"
                className="text-white"
                icon={faTrash}
              />
            </button>
          )}
        </section>
        <section className="my-1 flex flex-row flex-wrap gap-3 rounded-xl bg-gray-50/10 p-3">
          {topics.map((item, index) => (
            <SelectedTopic topic={item} key={index} />
          ))}
        </section>
        <ul className="menu bg-base-200 min-h-full w-full">
          <li className="p-1 text-lg">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-1 text-lg">
            <Link href={"/analysis"}>Analysis</Link>
          </li>
          {questions.length > 1 && (
            <li className="p-1 text-lg">
              <Link href={"/results"}>Last results</Link>
            </li>
          )}
        </ul>
        <a
          target="_blank"
          href="https://github.com/Mman7"
          className="btn btn-soft btn-info mt-auto"
        >
          By EricMan
        </a>
      </div>
    </>
  );
}
