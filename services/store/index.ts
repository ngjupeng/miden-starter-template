import { create } from "zustand";

type GlobalState = {
  counter: number;
  setCounter: (newCounter: number) => void;
};

export const useGlobalState = create<GlobalState>((set) => ({
  counter: 0,
  setCounter: (newValue: number): void => set(() => ({ counter: newValue })),
}));
