"use client";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import ComfirmModal from "./comfirmModal";
import SelectDifficultyModal from "./selectDifficultyModal";
import StartGameModal from "./startModal/startGameModal";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { useRouter } from "next/navigation";
import { ModelName } from "@/src/store/useComfirmModalStore";

export default function ModalManager() {
  const selectedTopicsStore = useQuizOption();
  const quizGame = useQuizGame();
  const router = useRouter();

  const restartGame = () => {
    quizGame.clearQuestion();
    router.replace("/");
  };

  return (
    <div>
      <SelectDifficultyModal
        chooseFn={(topic) => selectedTopicsStore.addTopic(topic)}
      />
      <StartGameModal />
      <ComfirmModal
        modalName={ModelName.restartModal}
        callback={() => restartGame()}
        title="Restart"
        description="Restarting will start things over from the beginning. Are you sure?"
      />
      <ComfirmModal
        modalName={ModelName.removeTopicModal}
        callback={() => restartGame()}
        title="Remove Topic"
        description="To remove this topic, the game must restart. Are you sure you want to restart?"
      />
    </div>
  );
}
