'use client'

// React
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Styles
import styles from './Sidepanel.module.scss'

// Packages
import { motion } from 'framer-motion'

interface SidepanelWrapperProps {
  children: React.ReactNode
}

export const SidepanelWrapper = (props: SidepanelWrapperProps) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return createPortal(
    <div className={styles.wrapper}>{props.children}</div>,
    document.getElementById('sidepanel-portal') as HTMLElement,
  )
}
