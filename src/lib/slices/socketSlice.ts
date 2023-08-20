// Zustand
import { StateCreator } from 'zustand'

// Socket
import { ReadyState } from 'react-use-websocket'

export interface SocketState {
  status: any
}

export interface SocketSlice {
  socket: SocketState
  setSocket: (socket: any) => void
}

const initialState: SocketState = {
  status: ReadyState.UNINSTANTIATED,
}

export const createSocketSlice: StateCreator<SocketSlice> = (set) => ({
  socket: initialState,
  setSocket: (socket: any) => {
    set({
      socket,
    })
  },
})
