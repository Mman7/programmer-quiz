import { useDifficultyModal } from "@/src/store/useDifficultyModalStore";
import { playHoverSound, playPressedSound } from "@/src/utils/playSound";

interface OptionProps {
  item: string;
}

export default function DifficultyOption({ item }: OptionProps) {
  const { openModal } = useDifficultyModal();

  const itemHandleClick = () => {
    playPressedSound();
    openModal(item);
  };

  const handleHover = () => {
    playHoverSound();
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
