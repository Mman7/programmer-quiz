import { create } from "zustand";
import { QuizQuestion } from "../types/quizQuestion";
import { persist } from "zustand/middleware";

// Whole app state
interface useQuizGameState {
  questions: QuizQuestion[];
  lastQuestionIndex: number;
  isLastGameDataSaved: boolean;
  setLastGameDataSaved: (value: boolean) => void;
  setLastQuestionIndex: (index: number) => void;
  setQuestion: (question: QuizQuestion[]) => void;
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
        lastQuestionIndex: 0,
        isLastGameDataSaved: false,
        setLastQuestionIndex: (index: number) =>
          set((state) => ({ lastQuestionIndex: index })),
        setLastGameDataSaved: (value: boolean) =>
          set({ isLastGameDataSaved: value }),
        setQuestion: (newQuestionList: QuizQuestion[]) =>
          set((state) => ({ questions: newQuestionList })),
        clearQuestion: () =>
          set(() => {
            return { questions: [], isLastGameDataSaved: false };
          }),
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
  questions: QuizQuestion[];
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
    lastQuestionIndex: quiz.lastQuestionIndex,
    setLastQuestionIndex: quiz.setLastQuestionIndex,
    setQuestion: quiz.setQuestion,
    clearQuestion: quiz.clearQuestion,
    updateQuestionFromArray: quiz.updateQuestionFromArray,
    isLastGameDataSaved: quiz.isLastGameDataSaved,
    setisLastGameDataSaved: quiz.setLastGameDataSaved,
  };
};
