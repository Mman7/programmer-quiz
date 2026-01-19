import { useSelectedTopicsStore } from "@/src/store/useSelectedTopicsStore";
import { useDifficultyModalStore } from "@/src/store/useDifficultyModalStore";

interface OptionProps {
  item: string;
}

export default function DifficultyOption({ item }: OptionProps) {
  const difficultyModalStore = useDifficultyModalStore();

  const itemHandleClick = () => difficultyModalStore.openModal(item);

  return (
    <>
      <button
        onClick={itemHandleClick}
        className="text-1xl p-4 text-left hover:cursor-pointer hover:bg-white/50"
      >
        {item}
      </button>
    </>
  );
}
