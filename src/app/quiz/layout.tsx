"use client";

import GoBackButton from "@/src/components/goBackButton";

export default function QuizPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-[calc(100vh-4rem)] flex-col">
        <GoBackButton className="absolute" />
        {children}
      </div>
    </>
  );
}
