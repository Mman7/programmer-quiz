import { create } from "zustand";

interface SelectModalState {
  modalOpenStatus: boolean;
  topicName: string;
  openModal: (topicName: string) => void;
  closeModal: () => void;
}

export const useDifficultyModalStore = create<SelectModalState>()((set) => {
  return {
    modalOpenStatus: false,
    topicName: "",
    openModal: (topicName: string) =>
      set((state) => ({ modalOpenStatus: true, topicName: topicName })),
    closeModal: () =>
      set((state) => ({
        modalOpenStatus: false,
      })),
  };
});
