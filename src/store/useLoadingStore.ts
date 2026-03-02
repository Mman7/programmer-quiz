import { create } from "zustand";

interface useLoadingState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const useLoadingStore = create<useLoadingState>()((set) => {
  return {
    isLoading: false,
    setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
  };
});

export const useLoading = () => {
  const loading = useLoadingStore((state) => state);

  return {
    isLoading: loading.isLoading,
    setLoading: loading.setLoading,
  };
};
