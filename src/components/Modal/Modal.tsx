// React
import { createPortal } from 'react-dom'

interface ModalWrapperProps {
  children: React.ReactNode
  closeModal: () => void
}

const ModalWrapper = (props: ModalWrapperProps) => {
  return createPortal(
    <div
      className=""
      onClick={props.closeModal}
    >
      {props.children}
    </div>,
    document.getElementById('portal') as HTMLElement,
  )
}

interface ModalProps {
  closeModal: () => void
}

const Modal = (props: ModalProps) => {
  return (
    <ModalWrapper closeModal={props.closeModal}>
      <div className="">
        <h3>Modal</h3>
        <p>Modal content</p>
      </div>
    </ModalWrapper>
  )
}

export default Modal
