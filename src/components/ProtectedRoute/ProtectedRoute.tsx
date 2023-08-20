'use client'

// React
import { useEffect } from 'react'

// Next
import { useRouter } from 'next/navigation'

// Store
import { useApp } from '@/lib/store'

// Components
import Button from '../Button'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const {
    auth: { user, refreshToken },
    refresh,
  } = useApp()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')

      return
    }
  }, [user, router, refreshToken, refresh])

  return <>{props.children}</>
}

export default ProtectedRoute
