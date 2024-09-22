import { create } from 'zustand';

interface ScoreState {
  countTotal: number;
  countSuccess: number;
  countFailed: number;
  setCountTotal: () => void;
  setCountSuccess: () => void;
  setCountFailed: () => void;
}

export const useScore = create<ScoreState>((set) => ({
  countTotal: 0,
  countSuccess: 0,
  countFailed: 0,
  setCountTotal: () => set((state) => ({ countTotal: state.countTotal + 1 })),
  setCountSuccess: () => set((state) => ({ countSuccess: state.countSuccess + 1 })),
  setCountFailed: () => set((state) => ({ countFailed: state.countFailed + 1 })),
}));
