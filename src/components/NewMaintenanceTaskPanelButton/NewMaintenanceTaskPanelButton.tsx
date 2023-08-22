'use client'

// React
import { useState } from 'react'

// Components
import Button from '../Button'
import NewMaintenanceTaskForm from '../NewMaintenanceTask'
import Sidepanel from '../Sidepanel'

const NewMaintenanceTaskPanelButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleClick = () => setIsPanelOpen((state) => !state)

  return (
    <>
      <Button onClick={handleClick}>Add Maintenance Task</Button>

      {isPanelOpen && (
        <Sidepanel onClose={handleClick}>
          <NewMaintenanceTaskForm />
        </Sidepanel>
      )}
    </>
  )
}

export default NewMaintenanceTaskPanelButton
