'use client'

// Styles
import styles from './Sidepanel.module.scss'

// Client Components
import { SidepanelWrapper } from './Sidepanel.client'

// Components
import Button from '../Button'

// Packages
import { motion } from 'framer-motion'
import { IconX } from '@tabler/icons-react'

interface SidepanelProps {
  children: React.ReactNode
  onClose?: () => void
}

const Sidepanel = (props: SidepanelProps) => {
  const variants = {
    open: {
      x: 0,
    },
    closed: {
      x: '100%',
    },
  }

  return (
    <SidepanelWrapper>
      <motion.div
        className={styles.base}
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        <div className={styles.header}>
          <p className={styles.title}>Panel Title</p>
          <Button onClick={props.onClose}>
            <IconX className="h-4 w-4" />
          </Button>
        </div>

        {props.children}
      </motion.div>
    </SidepanelWrapper>
  )
}

export default Sidepanel
