'use client'

// React
import { useState } from 'react'

// Next
import { useRouter } from 'next/navigation'

// State
import { useApp } from '@/lib/store'
import { AuthState } from '@/lib/slices/authSlice'

// Helpers
import { fetcher } from '@/helpers/api'

// React Hook Form
import { useForm } from 'react-hook-form'

// Components
import Alert from '../Alert'
import Button from '../Button'
import Form from '../Form'

// Styles
import styles from './RegisterForm.module.scss'

// Icons
import { IconArrowNarrowLeft, IconArrowNarrowRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const RegisterForm = () => {
  const { login } = useApp()

  const router = useRouter()

  const [stage, setStage] = useState<number>(0)
  const [error, setError] = useState<string>('')

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: {
        first: '',
        last: '',
      },
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
    },
  })

  const handleNext = () => setStage((stage) => stage + 1)
  const handleBack = () => setStage((stage) => stage - 1)

  const onSubmit = handleSubmit(async (fields) => {
    try {
      const response = await fetcher.POST('/auth/register', fields)

      const { data } = response as { data: AuthState }

      login(data)

      router.push('/dashboard')
    } catch (error: any) {
      setError(`Error: ${error.message}`)
    }
  })

  return (
    <motion.div
      layout
      className={styles.base}
    >
      {error && <Alert variant="error">{error}</Alert>}
      <form onSubmit={onSubmit}>
        {stage == 0 && (
          <>
            <Form.TextInput
              id="email"
              label="Email"
              register={register('email')}
            />

            <Form.TextInput
              id="password"
              label="Password"
              register={register('password')}
            />

            <Form.TextInput
              id="confirm_password"
              label="Confirm Password"
              register={register('password_confirmation')}
            />

            <Button
              onClick={handleNext}
              icon={<IconArrowNarrowRight />}
              className="ml-auto"
            >
              Next
            </Button>
          </>
        )}

        {stage === 1 && (
          <>
            <Form.TextInput
              id="first_name"
              label="First Name"
              register={register('name.first')}
            />
            <Form.TextInput
              id="last_name"
              label="Last Name"
              register={register('name.last')}
            />
            <Button.Container justify="between">
              <Button
                onClick={handleBack}
                variant="secondary"
                icon={<IconArrowNarrowLeft />}
                iconAlign="left"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                icon={<IconArrowNarrowRight />}
                className="ml-auto"
              >
                Next
              </Button>
            </Button.Container>
          </>
        )}

        {stage === 2 && (
          <>
            <Form.TextInput
              id="phone"
              label="Phone"
              register={register('phone')}
            />
            <div>
              <Button
                type="submit"
                className="w-full"
                icon={<IconArrowNarrowRight />}
              >
                Register
              </Button>
            </div>
          </>
        )}
      </form>
    </motion.div>
  )
}

export default RegisterForm
