import { create } from "zustand";
import { CharacterI } from "../../typescript/interfaces";

interface FilterState {
  filterData: CharacterI[];
  setFilterData: (newData: CharacterI[]) => void;
}

export const useFilterData = create<FilterState>((set) => ({
    filterData: [],
    setFilterData: (newData) => set({ filterData: newData })
}));
