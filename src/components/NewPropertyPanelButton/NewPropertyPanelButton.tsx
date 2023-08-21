'use client'

// React
import { useState } from 'react'

// Components
import Button from '../Button'
import NewPropertyForm from '../NewPropertyForm'
import Sidepanel from '../Sidepanel'
import { AnimatePresence } from 'framer-motion'

const NewPropertyPanelButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const handleClick = () => setIsPanelOpen((state) => !state)

  return (
    <>
      <Button onClick={handleClick}>Add New Property</Button>

      {isPanelOpen && (
        <Sidepanel onClose={handleClick}>
          <NewPropertyForm />
        </Sidepanel>
      )}
    </>
  )
}

export default NewPropertyPanelButton
