// Styles
import styles from './Modal.module.scss'

// Client Components
import { ModalWrapper } from './Modal.client'

interface ModalProps {
  children: React.ReactNode
  closeModal: () => void
}

const Modal = (props: ModalProps) => {
  return (
    <ModalWrapper>
      <div className={styles.base}>
        <h3>Modal</h3>
        <p>Modal content</p>
        {props.children}
      </div>
    </ModalWrapper>
  )
}

export default Modal
