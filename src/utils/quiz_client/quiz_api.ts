import Topic from "@/src/types/topic";

export interface Quiz {
  numberOfQuiz: number;
  topics: Topic[];
}

export const fetchQuiz = async ({ quiz }: { quiz: Quiz }) => {
  const res = await fetch("http://localhost:3000/api/quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quiz),
  });
  return await res.json();
};
