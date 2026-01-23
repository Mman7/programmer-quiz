import { color } from "@/src/enum/topicBadgeColor";
import { useMounted } from "@/src/hooks/useMounted";
import { ModelName, useConfirmModal } from "@/src/store/useComfirmModalStore";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { Topic } from "@/src/types/topic";
import { useEffect } from "react";

export default function RemovableTopicBadge({ topic }: { topic: Topic }) {
  const { removeTopic } = useQuizOption();
  const { questions } = useQuizGame();
  const { setModalName } = useConfirmModal();
  const mounted = useMounted();

  const showConfirmModal = (topic: Topic) => {
    setModalName(ModelName.removeTopicModal);
  };

  useEffect(() => {}, [mounted]);

  return (
    <button
      onClick={() =>
        questions.length > 0 ? showConfirmModal(topic) : removeTopic(topic)
      }
      className={`btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="-mr-3 group-hover:mr-0">{topic.name}</h1>
      <h1 className="invisible transition-all duration-75! group-hover:visible">
        X
      </h1>
    </button>
  );
}
