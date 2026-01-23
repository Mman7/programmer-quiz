import Topic from "@/src/types/topic";

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
  return await res.json();
};
