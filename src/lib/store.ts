// Zustand
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

// Slices
import { AuthSlice, createAuthSlice } from './slices/authSlice'
import { SocketSlice, createSocketSlice } from './slices/socketSlice'

type StoreState = AuthSlice & SocketSlice

export const useApp = create<StoreState>()(
  persist(
    (...args) => ({
      ...createAuthSlice(...args),
      ...createSocketSlice(...args),
    }),
    {
      name: 'applicationStore',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
