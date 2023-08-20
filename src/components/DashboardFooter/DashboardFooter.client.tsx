'use client'

// Zustand
import { useApp } from '@/lib/store'

export const SocketStatus = () => {
  const {
    socket: { status },
  } = useApp()

  return <p>Socket Status: {status}</p>
}
