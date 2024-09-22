import { create } from 'zustand';
import { CharacterI } from '../../typescript/interfaces';


interface AttemptsState {
  attempts: CharacterI[];
  setAttempts: (newData: CharacterI[]) => void;
}

export const useAttempts = create<AttemptsState>((set) => ({
  attempts: [],
  setAttempts: (newAttempt) => set({ attempts: newAttempt })
}));
