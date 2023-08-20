'use client'

import { useApp } from '@/lib/store'
// React
import { useEffect } from 'react'

// Packages
import useWebSocket, { ReadyState } from 'react-use-websocket'

interface SocketHandlerProps {
  children: React.ReactNode
}

const SocketHandler = (props: SocketHandlerProps) => {
  const { setSocket } = useApp()

  const { readyState, lastJsonMessage, sendMessage } = useWebSocket(
    process.env.NEXT_PUBLIC_SOCKET_URI as string,
    {
      retryOnError: true,
      reconnectAttempts: 10,
      reconnectInterval: 2500,
    },
  )

  useEffect(() => {
    const status = {
      [ReadyState.CONNECTING]: 'Connecting',
      [ReadyState.OPEN]: 'Open',
      [ReadyState.CLOSING]: 'Closing',
      [ReadyState.CLOSED]: 'Closed',
      [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState]

    setSocket({
      status: status,
    })

    if (readyState === ReadyState.OPEN) {
      sendMessage('heartbeat')
    }
  }, [readyState, setSocket, sendMessage])

  useEffect(() => {
    if (lastJsonMessage) {
      console.log(lastJsonMessage)
    }
  }, [lastJsonMessage])

  return <>{props.children}</>
}

export default SocketHandler
