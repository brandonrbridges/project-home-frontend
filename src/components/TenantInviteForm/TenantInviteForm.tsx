'use client'

// React
import { useEffect, useState } from 'react'

// Next
import { usePathname } from 'next/navigation'

// Zustand
import { useApp } from '@/lib/store'

// Types
import { ITenantInvite } from '@/types/property.types'

// Helpers
import { fetcher } from '@/helpers/api'

// Styles
import styles from './TenantInviteForm.module.scss'

// Components
import Button from '../Button'
import Form from '../Form'

// React Hook Form
import { useForm } from 'react-hook-form'

// Icons
import { IconBell, IconX } from '@tabler/icons-react'

const TenantInviteForm = () => {
  const {
    auth: { user },
  } = useApp()

  const pathname = usePathname()
  const property_id = pathname.split('/').pop()

  const [pendingInvite, setPendingInvite] = useState<ITenantInvite | null>(null)

  const { handleSubmit, register } = useForm({
    defaultValues: {
      sender_id: user?._id,
      property_id: property_id,
      name: {
        first: '',
        last: '',
      },
      recipient_email: '',
      details: {
        proof_of_identity: false,
        proof_of_income: false,
        employers_details: false,
        references: false,
      },
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetcher.POST('/invitations/create', data)

      alert('Invitation sent!')
    } catch (error) {
      console.error(error)
    }
  })

  useEffect(() => {
    const getPendingInvite = async () => {
      try {
        const response = await fetcher.GET(
          `/invitations?property_id=${property_id}`,
        )

        if (response) {
          setPendingInvite(response as ITenantInvite)
        }
      } catch (error) {
        console.error(error)
      }
    }

    getPendingInvite()
  }, [pathname, property_id])

  if (pendingInvite) {
    return (
      <div className="space-y-4">
        <p>
          {pendingInvite.name.first} {pendingInvite.name.last} has been invited
          to this property. Please wait for them to fill out their details.
        </p>
        <Button.Container justify="end">
          <Button icon={<IconBell />}>Send Reminder</Button>
          <Button
            variant="danger"
            icon={<IconX />}
          >
            Cancel Invite
          </Button>
        </Button.Container>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className={styles.base}
    >
      <div className="grid grid-cols-2 gap-4">
        <Form.TextInput
          id="name.first"
          label="First Name"
          register={register('name.first')}
        />

        <Form.TextInput
          id="name.last"
          label="Last Name"
          register={register('name.last')}
        />
      </div>

      <Form.TextInput
        id="email"
        label="Email"
        register={register('recipient_email')}
      />

      <Form.CheckboxInput
        id="proof_of_identity"
        label="Proof of Identity"
        text="Would you like your tenant to provide proof of identity?"
        register={register('details.proof_of_identity')}
      />

      <Form.CheckboxInput
        id="proof_of_income"
        label="Proof of Income"
        text="Would you like your tenant to provide proof of income?"
        register={register('details.proof_of_income')}
      />

      <Form.CheckboxInput
        id="employers_details"
        label="Employer's Details"
        text="Would you like your tenant to provide their employer's details?"
        register={register('details.employers_details')}
      />

      <Form.CheckboxInput
        id="references"
        label="References"
        text="Would you like your tenant to provide references?"
        register={register('details.references')}
      />

      <Button.Container justify="end">
        <Button type="submit">Invite Tenant</Button>
      </Button.Container>
    </form>
  )
}

export default TenantInviteForm
