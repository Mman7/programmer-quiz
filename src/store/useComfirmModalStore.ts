import { create } from "zustand";

export enum ModelName {
  none,
  restartModal,
  removeTopicModal,
}

interface useConfirmModalState {
  currentShowingModalName: ModelName;
  setModalName: (value: ModelName) => void;
  closeModal: () => void;
}

const useConfirmModalStore = create<useConfirmModalState>()((set) => {
  return {
    currentShowingModalName: ModelName.none,
    setModalName: (value: ModelName) => set({ currentShowingModalName: value }),
    closeModal: () => set({ currentShowingModalName: ModelName.none }),
  };
});

export const useConfirmModal = () => {
  const useModal = useConfirmModalStore((state) => state);

  return {
    currentShowingModalName: useModal.currentShowingModalName,
    setModalName: useModal.setModalName,
    closeModal: useModal.closeModal,
  };
};
