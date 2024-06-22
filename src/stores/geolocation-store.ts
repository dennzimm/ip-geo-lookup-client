import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface GeolocationState {
  selectedIp: string;
  setSelectedIp: (ip: string) => void;
  clearSelectedIp: () => void;
}

export const useGeolocationStore = create<GeolocationState>()(
  devtools((set) => ({
    selectedIp: "",
    setSelectedIp: (ip: string) => set({ selectedIp: ip }),
    clearSelectedIp: () => set({ selectedIp: "" }),
  }))
);
