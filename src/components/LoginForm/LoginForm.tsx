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
import styles from './LoginForm.module.scss'

// Icons
import { IconArrowNarrowRight } from '@tabler/icons-react'

const LoginForm = () => {
  const { login } = useApp()

  const router = useRouter()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [error, setError] = useState<string>('')

  const onSubmit = handleSubmit(async (fields) => {
    try {
      const response = await fetcher.POST('/auth/login', fields)

      const { data } = response as { data: AuthState }

      login(data)

      router.push('/dashboard')
    } catch (error: any) {
      setError(`Error: ${error.message}`)
    }
  })

  return (
    <div className={styles.base}>
      {error && <Alert variant="error">{error}</Alert>}
      <form onSubmit={onSubmit}>
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

        <div>
          <Button
            type="submit"
            className="w-full"
            icon={<IconArrowNarrowRight />}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
