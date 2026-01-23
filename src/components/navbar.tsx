"use client";

import {
  faArrowRotateRight,
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModelName, useConfirmModal } from "../store/useComfirmModalStore";
import { usePathname, useRouter } from "next/navigation";
import { useQuizGame } from "../store/useQuizGameStore";

export default function Navbar() {
  const pathname = usePathname();
  const isQuizPage = pathname == "/quiz" || pathname.startsWith("/quiz/");

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="dropdown">
          <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="text-xl font-medium text-black">Programmer Quiz</h1>
      </div>
      <div className="navbar-end">
        {isQuizPage ? <RestartButton /> : <ContinueButton />}
      </div>
    </div>
  );
}

function ContinueButton() {
  const { questions, lastQuestionIndex } = useQuizGame();
  const router = useRouter();

  const handleContinueGame = () => {
    router.push(`/quiz/${lastQuestionIndex}`);
  };
  return (
    questions.length > 1 && (
      <button
        onClick={() => handleContinueGame()}
        className="btn btn-success group"
      >
        <FontAwesomeIcon
          className="sm:opacity-0 group-hover:sm:opacity-100"
          icon={faRightToBracket}
        />
        <h1 className="-ml-5 hidden group-hover:m-0 sm:block">Continue</h1>
      </button>
    )
  );
}

function RestartButton() {
  const { setModalName } = useConfirmModal();

  const handleRestartGame = () => {
    setModalName(ModelName.restartModal);
  };
  return (
    <button onClick={() => handleRestartGame()} className="btn btn-secondary">
      <FontAwesomeIcon className="sm:hidden" icon={faArrowRotateRight} />
      <h1 className="hidden sm:block">Restart Game</h1>
    </button>
  );
}
