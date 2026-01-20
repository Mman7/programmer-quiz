import { create } from "zustand";

interface SelectModalState {
  modalOpenStatus: boolean;
  topicName: string;
  openModal: (topicName: string) => void;
  closeModal: () => void;
}

const useDifficultyModalStore = create<SelectModalState>()((set) => {
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

export const useDifficultyModal = () => {
  const state = useDifficultyModalStore((state) => state);
  return {
    modalOpenStatus: state.modalOpenStatus,
    topicName: state.topicName,
    openModal: state.openModal,
    closeModal: state.closeModal,
  };
};
