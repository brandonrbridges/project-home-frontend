import Button from '../Button'
import Form from '../Form'

export const FooterForm = () => {
  return (
    <form className="flex items-end space-x-4">
      <Form.TextInput
        id="email"
        label="Email"
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
