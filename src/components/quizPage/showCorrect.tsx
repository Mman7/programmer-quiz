import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface checkCorrectProps {
  isSubmit: boolean;
  isCorrect: boolean;
}

export default function CheckCorrect({
  isSubmit,
  isCorrect,
}: checkCorrectProps) {
  return (
    <h1
      className={`${isSubmit && "visible"} ${isCorrect ? "text-green-300" : "text-red-400"} invisible my-2 rounded-lg bg-white/60 p-4 font-bold`}
    >
      {isCorrect ? (
        <>
          <FontAwesomeIcon size="xl" icon={faCircleCheck} />{" "}
          <span>Great job — your answer is correct.</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon size="xl" icon={faCircleXmark} />
          <span className="ml-2">Good try, but this one isn’t correct.</span>
        </>
      )}
    </h1>
  );
}
