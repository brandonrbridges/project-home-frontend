'use client'

// React
import React, { useEffect, useState } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    setHasError(false)
  }, [])

  const handleCatch = () => {
    setHasError(true)
  }

  return { hasError, handleCatch }
}

const ErrorBoundary = (props: ErrorBoundaryProps) => {
  const { hasError, handleCatch } = useErrorBoundary()

  if (hasError) {
    return <p>Something went wrong.</p>
  }

  return React.Children.map(props.children, (child) =>
    React.cloneElement(child as React.ReactElement<any>, {
      onError: handleCatch,
    }),
  )
}

export default ErrorBoundary
