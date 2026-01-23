import { RequestAnswer } from "@/src/types/answer";
import { Topic } from "@/src/types/topic";

/**
 * Represents a quiz with a number and associated topics
 */
export interface Quiz {
  numberOfQuiz: number;
  topics: Topic[];
}

/**
 * Fetches a random quiz from the API
 * @param quiz - The quiz configuration containing number of questions and topics
 * @returns A promise that resolves to the quiz data
 */
export const fetchQuiz = async ({ quiz }: { quiz: Quiz }) => {
  const res = await fetch("/api/random-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(quiz),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quiz questions");
  }

  return await res.json();
};

export async function getQuizAnswer({ req }: { req: RequestAnswer }) {
  const res = await fetch("/api/answer-validation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch quiz answer");
  }

  return await res.json();
}
