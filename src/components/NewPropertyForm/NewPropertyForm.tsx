'use client'

// React
import { useState } from 'react'

// State
import { useApp } from '@/lib/store'

// Helpers
import { fetcher } from '@/helpers/api'

// Components
import Button from '../Button'
import Form from '../Form'

// React Hook Form
import { useForm } from 'react-hook-form'

const NewPropertyForm = () => {
  const {
    auth: { user },
  } = useApp()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      owner_id: user?._id,
      address: {
        line_1: '',
        line_2: '',
        city: '',
        state: '',
        country: '',
        postal_code: '',
      },
      type: '',
      bedrooms: 0,
      bathrooms: 0,
      rent: {
        amount: 0,
        start_date: '',
        frequency: '',
      },
      deposit: 0,
    },
  })

  const [error, setError] = useState<string>('')

  const onSubmit = handleSubmit(async (fields) => {
    try {
      const response = await fetcher.POST('/properties/create', fields)

      console.log(response)
    } catch (error: any) {
      setError(`Error: ${error.message}`)
    }
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>Address</p>
        <div className="grid grid-cols-2 gap-4">
          <Form.TextInput
            id="address.line_1"
            label="Line 1"
            register={register('address.line_1')}
          />
          <Form.TextInput
            id="address.line_2"
            label="Line 2 (optional)"
            register={register('address.line_2')}
          />
          <Form.TextInput
            id="address.city"
            label="City"
            register={register('address.city')}
          />
          <Form.TextInput
            id="address.state"
            label="State"
            register={register('address.state')}
          />
          <Form.TextInput
            id="address.country"
            label="Country"
            register={register('address.country')}
          />
          <Form.TextInput
            id="address.postal_code"
            label="Postal Code"
            register={register('address.postal_code')}
          />
        </div>

        <p>Details</p>
        <div className="grid grid-cols-3 gap-4">
          <Form.TextInput
            id="type"
            label="Type"
            register={register('type')}
          />
          <Form.TextInput
            id="bedrooms"
            label="Bedrooms"
            register={register('bedrooms')}
          />
          <Form.TextInput
            id="bathrooms"
            label="Bathrooms"
            register={register('bathrooms')}
          />
        </div>

        <p>Financials</p>
        <div className="grid grid-cols-3 gap-4">
          <Form.TextInput
            id="rent.amount"
            label="How much is rent?"
            register={register('rent.amount')}
          />
          <Form.DateInput
            id="rent.start_date"
            label="When does rent start?"
            register={register('rent.start_date')}
          />
          <Form.SelectInput
            id="rent.frequency"
            label="How often is rent due?"
            register={register('rent.frequency')}
            options={['weekly', 'biweekly', 'monthly', 'yearly']}
          />
          <Form.TextInput
            id="deposit"
            label="Deposit"
            register={register('deposit')}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default NewPropertyForm
