"use client";

import {
  faArrowRotateRight,
  faBackward,
  faBars,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModelName, useConfirmModal } from "../store/useComfirmModalStore";
import { usePathname, useRouter } from "next/navigation";
import { useQuizGame } from "../store/useQuizGameStore";
import { playPressedSound } from "../utils/playSound";

export default function Navbar() {
  const pathname = usePathname();
  const isQuizPage = pathname == "/quiz" || pathname.startsWith("/quiz/");
  const notHomePage = pathname !== "/";
  const router = useRouter();

  const handleBack = () => {
    playPressedSound();
    router.replace("/");
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="dropdown">
          <div>
            <label
              onClick={() => playPressedSound()}
              htmlFor="my-drawer-3"
              className="btn btn-neutral drawer-button lg:hidden"
            >
              <FontAwesomeIcon icon={faBars} />
            </label>
            {notHomePage && (
              <button
                className="btn btn-outline btn-success group mx-2 font-bold sm:hidden"
                onClick={() => handleBack()}
              >
                <FontAwesomeIcon
                  className="opacity-100 group-hover:opacity-100 sm:opacity-0"
                  icon={faBackward}
                />
                <h1 className="-ml-5 hidden group-hover:m-0 sm:block">Back</h1>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <h1 className="text-warning text-2xl font-bold">Quiz This</h1>
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
    playPressedSound();
    router.push(`/quiz/${lastQuestionIndex + 1}`);
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
    playPressedSound();
    setModalName(ModelName.restartModal);
  };
  return (
    <button onClick={() => handleRestartGame()} className="btn btn-secondary">
      <FontAwesomeIcon className="sm:hidden" icon={faArrowRotateRight} />
      <h1 className="hidden sm:block">Restart Game</h1>
    </button>
  );
}
