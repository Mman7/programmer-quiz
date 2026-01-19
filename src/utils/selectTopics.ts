import { create } from "zustand";
import { querystring } from "zustand-querystring";
interface MyStore {
  search: string;
  page: number;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
}

export const useMyStore = create<MyStore>(
  querystring(
    (set) => ({
      search: "",
      page: 1,
      setSearch: (search: any) => set({ search }),
      setPage: (page: any) => set({ page }),
    }),
    {
      select: () => ({ search: true, page: true }),
    },
  ),
);
// URL: ?search=hello&page=2
