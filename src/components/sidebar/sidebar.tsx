"use client";

import Topic from "@/src/types/topic";
import {
  useSelectedTopicsStore,
  useSelectedTopics,
} from "@/src/store/useSelectedTopicsStore";
import SelectedTopic from "./selectedTopic";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const selectedTopics = useSelectedTopics();
  const selectedTopicsStore = useSelectedTopicsStore();
  const [topics, setTopics] = useState<Topic[]>([]);

  //**
  //! have to be this way to get topic
  //  zustand querystring save data to local so it required time to get
  //  have to wait zustand fetch data then update this component state
  //  */
  useEffect(() => {
    setTopics(selectedTopics);
  }, [selectedTopics]);

  return (
    <>
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="menu bg-base-100 flex min-h-full w-80 p-4">
        <section className="flex items-center justify-between">
          <h1 className="mb-3 text-xl font-bold">Topics</h1>
          <button
            onClick={() => selectedTopicsStore.removeAll()}
            className="btn"
          >
            <FontAwesomeIcon size="xl" icon={faTrash} />
          </button>
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
