import { create } from 'zustand'

export const useWorkspaceStore = create((set) => ({
  exists: false,
  validateExists: () => set(() => ({ exists: true })),
}))
