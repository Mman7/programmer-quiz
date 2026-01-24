import { color } from "@/src/enum/topicBadgeColor";
import { ModelName, useConfirmModal } from "@/src/store/useComfirmModalStore";
import { useQuizGame } from "@/src/store/useQuizGameStore";
import { useQuizOption } from "@/src/store/useSelectedTopicsStore";
import { Topic } from "@/src/types/topic";

export default function RemovableTopicBadge({ topic }: { topic: Topic }) {
  const { removeTopic } = useQuizOption();
  const { questions } = useQuizGame();
  const { setModalName } = useConfirmModal();

  const showConfirmModal = () => {
    setModalName(ModelName.removeTopicModal);
  };

  return (
    <button
      onClick={() =>
        questions.length > 0 ? showConfirmModal() : removeTopic(topic)
      }
      className={`btn btn-outline group transition-all duration-75 ${color[topic.difficulty]}`}
    >
      <h1 className="">{topic.name}</h1>
      <h1 className="transition-all duration-75!">X</h1>
    </button>
  );
}
