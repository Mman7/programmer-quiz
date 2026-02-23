import { useDifficultyModal } from "@/src/store/useDifficultyModalStore";
import { playSound } from "@/src/utils/playSound";

interface OptionProps {
  item: string;
}

export default function DifficultyOption({ item }: OptionProps) {
  const { openModal } = useDifficultyModal();

  const itemHandleClick = () => {
    playSound("pressed");
    openModal(item);
  };

  const handleHover = () => {
    playSound("uiHover");
  };

  return (
    <>
      <button
        onMouseEnter={() => handleHover()}
        onClick={itemHandleClick}
        className="text-1xl rounded-lg p-4 text-left font-medium hover:cursor-pointer hover:bg-white/10"
      >
        {item}
      </button>
    </>
  );
}
