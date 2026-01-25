import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DataWithDate } from "../types/data";

interface useStartModalState {
  correctQuiz: number;
  // limit data by 7
  recent7DaysData: DataWithDate[];
  addCorrectQuiz: (count: number) => void;
  setCorrectQuiz: (count: number) => void;
  updateTodayData: (count: number) => void;
}

const useDataStore = create<useStartModalState>()(
  persist(
    (set) => ({
      correctQuiz: 0,
      recent7DaysData: [],
      updateTodayData: (count: number) =>
        set((state) => {
          const newRecent7DaysData = updateTodayData(
            state.recent7DaysData,
            count,
          );
          return { recent7DaysData: newRecent7DaysData };
        }),

      addCorrectQuiz: (count: number) =>
        set((state) => ({ correctQuiz: state.correctQuiz + count })),
      setCorrectQuiz: (count: number) => set({ correctQuiz: count }),
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
  // Create a copy of the list to avoid mutating the original
  const newList = [...list];
  // remove last item if list is full (7 items)
  if (newList.length >= 7) newList.shift();

  // Add to the data
  let newTodayData;
  if (todayData) newTodayData = todayData.correctQuiz + value;
  if (!todayData) newTodayData = value;

  // add newData to the last index of array
  const updatedList = [
    ...newList,
    { date: new Date(), correctQuiz: newTodayData! },
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
  };
};
