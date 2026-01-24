"use client";

import GoBackButton from "@/src/components/goBackButton";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function QuizPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)]">
        <GoBackButton />
        {children}
      </div>
    </>
  );
}
