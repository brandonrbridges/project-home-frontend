'use client'

// React
import { createPortal } from 'react-dom'

// Styles
import styles from './Modal.module.scss'

interface ModalWrapperProps {
  children: React.ReactNode
}

export const ModalWrapper = (props: ModalWrapperProps) => {
  return createPortal(
    <div className={styles.wrapper}>{props.children}</div>,
    document.getElementById('modal-portal') as HTMLElement,
  )
}
