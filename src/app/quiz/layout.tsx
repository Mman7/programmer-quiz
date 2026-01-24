"use client";

import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function QuizPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  function handleBack(): void {
    router.push("/");
  }

  return (
    <>
      <div className="flex h-[calc(100vh-4rem)]">
        <button
          className="btn btn-outlinex btn-success group absolute m-3 hidden font-bold sm:flex"
          onClick={() => handleBack()}
        >
          <FontAwesomeIcon
            className="opacity-0 group-hover:opacity-100"
            icon={faBackward}
          />
          <h1 className="-ml-5 group-hover:m-0">Back to homepage</h1>
        </button>
        {children}
      </div>
    </>
  );
}
