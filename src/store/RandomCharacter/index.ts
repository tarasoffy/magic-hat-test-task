import { create } from "zustand";
import { CharacterI } from "../../typescript/interfaces";

interface RandomCharacterState {
    randomCharacter: CharacterI | null; 
    setRandomCharacter: (newData: CharacterI) => void;
}

export const useRandomCharacter = create<RandomCharacterState>((set) => ({
    randomCharacter: null,
    setRandomCharacter: (random) => set({ randomCharacter: random })
}));
