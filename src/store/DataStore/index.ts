import { create } from "zustand";
import { CharacterI } from "../../typescript/interfaces";


interface DataState {
  data: CharacterI[];
  setData: (newData: CharacterI[]) => void;
}

export const useData = create<DataState>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData })
}));
