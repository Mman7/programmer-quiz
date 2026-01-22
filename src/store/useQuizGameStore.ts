import { create } from "zustand";
import { QuestionWithoutAnswer, QuizQuestion } from "../types/quizQuestion";
import { persist } from "zustand/middleware";

// Whole app state
interface useQuizGameState {
  questions: (QuizQuestion | QuestionWithoutAnswer)[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: (index: number) => void;
  setQuestion: (question: QuestionWithoutAnswer[]) => void;
  clearQuestion: () => void;
  updateQuestionFromArray: (
    quizQuestion: QuizQuestion,
    indexInQuestion: number,
  ) => void;
}

const useQuizGameStore = create<useQuizGameState>()(
  persist(
    (set) => {
      return {
        questions: [],
        currentQuestionIndex: 0,
        setCurrentQuestionIndex: (index: number) =>
          set((state) => ({ currentQuestionIndex: index })),
        setQuestion: (newQuestionList: QuestionWithoutAnswer[]) =>
          set((state) => ({ questions: newQuestionList })),
        clearQuestion: () => set({ questions: [] }),
        // Can updated with a question by providing a new question
        // this can be updated with answer/reason
        updateQuestionFromArray: (
          quizQuestion: QuizQuestion,
          indexInQuestion: number,
        ) => {
          set((state) => {
            const newList = replaceQuestionWithAnswer({
              questions: state.questions,
              quizQuestion: quizQuestion,
              indexInQuestion: indexInQuestion,
            });
            return { questions: newList };
          });
        },
      };
    },
    { name: "quiz-game-store" },
  ),
);

interface replaceQuestionProps {
  questions: QuizQuestion[] | QuestionWithoutAnswer[];
  quizQuestion: QuizQuestion;
  indexInQuestion: number;
}

const replaceQuestionWithAnswer = ({
  questions,
  quizQuestion,
  indexInQuestion,
}: replaceQuestionProps) => {
  const updatedQuestions = [...questions];
  updatedQuestions[indexInQuestion] = quizQuestion;
  return updatedQuestions;
};

export const useQuizGame = () => {
  const quiz = useQuizGameStore((state) => state);
  return {
    questions: quiz.questions,
    currentQuestionIndex: quiz.currentQuestionIndex,
    setCurrentQuestionIndex: quiz.setCurrentQuestionIndex,
    setQuestion: quiz.setQuestion,
    clearQuestion: quiz.clearQuestion,
    updateQuestionFromArray: quiz.updateQuestionFromArray,
  };
};
