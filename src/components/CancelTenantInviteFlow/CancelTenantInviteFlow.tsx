// React
import { useState } from 'react'

// Components
import Button from '../Button'
import Modal from '../Modal'

// Icons
import { IconX } from '@tabler/icons-react'

const CancelTenantInviteFlow = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleToggleModal = () => setIsModalOpen((state) => !state)

  return (
    <>
      <Button
        variant="danger"
        icon={<IconX />}
        onClick={handleToggleModal}
      >
        Cancel Invite
      </Button>

      {isModalOpen && (
        <Modal closeModal={handleToggleModal}>
          <h1>Cancel Tenant Invite Flow</h1>
          <p>Are you sure you want to cancel this tenant invite flow?</p>
        </Modal>
      )}
    </>
  )
}

export default CancelTenantInviteFlow
