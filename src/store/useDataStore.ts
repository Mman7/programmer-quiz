import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DataWithDate } from "../types/data";

interface useStartModalState {
  correctQuiz: number;
  recent7DaysData: DataWithDate[];
  addCorrectQuiz: (count: number) => void;
  setCorrectQuiz: (count: number) => void;
  updateTodayData: (count: number) => void;
  clearData: () => void;
}

const useDataStore = create<useStartModalState>()(
  persist(
    (set) => ({
      correctQuiz: 0,
      recent7DaysData: [],
      addCorrectQuiz: (count: number) =>
        set((state) => ({ correctQuiz: state.correctQuiz + count })),
      setCorrectQuiz: (count: number) => set({ correctQuiz: count }),
      updateTodayData: (count: number) =>
        set((state) => {
          const newRecent7DaysData = updateTodayData(
            state.recent7DaysData,
            count,
          );
          return { recent7DaysData: newRecent7DaysData };
        }),
      clearData: () => set({ correctQuiz: 0, recent7DaysData: [] }),
    }),
    { name: "start-data-store" },
  ),
);

const findTodayData = (list: DataWithDate[]): DataWithDate | undefined => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return list.find((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === today.getTime();
  });
};

const updateTodayData = (list: DataWithDate[], value: number) => {
  const todayData = findTodayData(list);
  const newList = [...list];
  if (newList.length >= 7) newList.shift();
  let newTodayData: number;
  if (todayData) {
    newTodayData = todayData.correctQuiz + value;
  } else {
    newTodayData = value;
  }

  if (todayData) {
    const todayIndex = newList.findIndex((item) => {
      const newDate = new Date(item.date);
      const todayDate = new Date(todayData.date);
      return newDate.toDateString() === todayDate.toDateString();
    });
    if (todayIndex !== -1) newList.splice(todayIndex, 1);
  }

  const updatedList = [
    ...newList,
    { date: new Date(), correctQuiz: newTodayData },
  ];
  return updatedList;
};

export const useData = () => {
  const state = useDataStore((state) => state);

  return {
    correctQuiz: state.correctQuiz,
    dataIn7Days: state.recent7DaysData,
    setCorrectQuiz: state.setCorrectQuiz,
    addCorrectQuiz: state.addCorrectQuiz,
    updateTodayData: state.updateTodayData,
    clearData: state.clearData,
  };
};
