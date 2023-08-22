// Styles
import styles from './Modal.module.scss'

// Client Components
import { ModalWrapper } from './Modal.client'

// Components
import Button from '../Button'

// Icons
import { IconX } from '@tabler/icons-react'

interface ModalProps {
  children: React.ReactNode
  closeModal: () => void
}

const Modal = (props: ModalProps) => {
  return (
    <ModalWrapper>
      <div className={styles.base}>
        <div className={styles.header}>
          <Button onClick={props.closeModal}>
            <IconX />
          </Button>
        </div>

        {props.children}
      </div>
    </ModalWrapper>
  )
}

export default Modal
