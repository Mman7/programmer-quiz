import { create } from "zustand";

interface useStartModalState {
  modalOpenStatus: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useStartModalStore = create<useStartModalState>()((set) => {
  return {
    modalOpenStatus: false,
    openModal: () => set((state) => ({ modalOpenStatus: true })),
    closeModal: () =>
      set((state) => ({
        modalOpenStatus: false,
      })),
  };
});

export const useStartModal = () => {
  const useModal = useStartModalStore((state) => state);

  return {
    status: useModal.modalOpenStatus,
    openModal: useModal.openModal,
    closeModal: useModal.closeModal,
  };
};
