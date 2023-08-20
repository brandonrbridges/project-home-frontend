'use client'

import { useApp } from '@/lib/store'
// React
import { useEffect, useState } from 'react'

interface HydratorProps {
  children: React.ReactNode
}

const Hydrator = (props: HydratorProps) => {
  const [hydrated, setHydrated] = useState(false)

  const {
    auth: { refreshToken },
    refresh,
  } = useApp()

  useEffect(() => {
    setHydrated(true)

    if (refreshToken) {
      refresh(refreshToken)
    }
  }, [refresh, refreshToken])

  if (!hydrated) return <p>Hydrating...</p>

  return <>{props.children}</>
}

export default Hydrator
