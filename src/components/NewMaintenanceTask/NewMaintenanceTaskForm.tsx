// Next
import { usePathname } from 'next/navigation'

// Zustand
import { useApp } from '@/lib/store'

// Helpers
import { fetcher } from '@/helpers/api'

// Components
import Button from '../Button'
import Form from '../Form'

// React Hook Form
import { useForm } from 'react-hook-form'

const NewMaintenanceTaskForm = () => {
  const {
    auth: { user },
  } = useApp()

  const pathname = usePathname()
  const property_id = pathname.split('/').pop()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      property_id: property_id,
      submitted_by: user?._id,
      category: '',
      description: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetcher.POST('/maintenance-tasks/create', data)

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <Form.SelectInput
        id="category"
        label="Category"
        register={register('category')}
        options={[
          'carpentry',
          'electrical',
          'general',
          'plumbing',
          'structural',
          'other',
        ]}
      />
      <Form.TextInput
        id="description"
        label="Description"
        register={register('description')}
        textarea
      />
      <Button.Container justify="end">
        <Button type="submit">Submit Task</Button>
      </Button.Container>
    </form>
  )
}

export default NewMaintenanceTaskForm
