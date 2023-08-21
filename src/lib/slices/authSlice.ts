// Zustand
import { StateCreator } from 'zustand'

// Helpers
import { fetcher } from '@/helpers/api'

// Types
import { IUser } from '@/types/user.types'

export interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  user: IUser | null
}

export interface AuthSlice {
  auth: AuthState
  login: (data: AuthState) => void
  logout: () => void
  refresh: (token: string) => void
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  auth: initialState,
  login: (data: AuthState) => {
    set({
      auth: data,
    })
  },
  logout: () => {
    set({
      auth: {
        accessToken: null,
        refreshToken: null,
        user: null,
      },
    })
  },
  refresh: async (token: string) => {
    try {
      const response = await fetcher.POST('/auth/refresh-token', {
        token,
      })

      const { data } = response as any

      set({
        auth: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          user: data.user,
        },
      })
    } catch (error) {
      console.error(error)
    }
  },
})
