import { useDifficultyModal } from "@/src/store/useDifficultyModalStore";

interface OptionProps {
  item: string;
}

export default function DifficultyOption({ item }: OptionProps) {
  const { openModal } = useDifficultyModal();
  const itemHandleClick = () => openModal(item);

  return (
    <>
      <button
        onClick={itemHandleClick}
        className="text-1xl rounded-lg p-4 text-left font-medium hover:cursor-pointer hover:bg-white/50"
      >
        {item}
      </button>
    </>
  );
}
