"use client";

export default function QuizPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex h-[calc(100vh-4rem)]">{children}</div>;
}
