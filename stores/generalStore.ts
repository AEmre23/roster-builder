import { create } from 'zustand'

interface GeneralStore {
  fieldRef: React.RefObject<HTMLDivElement> | null
  setFieldRef: (ref: React.RefObject<HTMLDivElement>) => void
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  fieldRef: null,
  setFieldRef: (ref: React.RefObject<HTMLDivElement>) => set({ fieldRef: ref })
}))