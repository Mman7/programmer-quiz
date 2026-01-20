"use client";

import SelectDifficultyModal from "../components/modal/selectDifficultyModal";
import StartGameModal from "../components/modal/startModal/startGameModal";
import Searchbar from "../components/searchbar/searchbar";
import StartQuizButton from "../components/startQuizButton";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";

export default function Home() {
  const selectedTopicsStore = useQuizOption();
  return (
    <div className="m-auto w-3/4 max-w-2xl">
      <Searchbar />
      <StartQuizButton />
      <SelectDifficultyModal
        chooseFn={(topic) => selectedTopicsStore.addTopic(topic)}
      />
      <StartGameModal />
    </div>
  );
}
