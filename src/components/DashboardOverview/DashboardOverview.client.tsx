'use client'

// State
import { useApp } from '@/lib/store'

// Components
import Card from '../Card'

// Assets
import placeholder from '@/assets/placeholder.svg'

// Icons
import { IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export const ProfileCard = () => {
  const {
    auth: { user },
  } = useApp()

  return (
    <Card>
      <Card.Image
        src={placeholder}
        alt="placeholder"
        className="mb-4"
      />
      <Card.Title>Hello {user?.name.first}!</Card.Title>
      <Card.Body className="space-y-4">
        <p>
          Here is an overview of your properties and your public landlord
          profile.
        </p>

        <div>
          <p className="mb-1 text-sm">Landlord Rating</p>
          <div className="flex space-x-2 text-eggplant">
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarFilled />
            <IconStarHalfFilled />
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
