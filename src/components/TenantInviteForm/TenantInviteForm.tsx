// Styles
import styles from './TenantInviteForm.module.scss'

// Components
import Button from '../Button'
import Form from '../Form'

const TenantInviteForm = () => {
  return (
    <form className={styles.base}>
      <div className="grid grid-cols-2 gap-4">
        <Form.TextInput
          id="name.first"
          label="First Name"
        />

        <Form.TextInput
          id="name.last"
          label="Last Name"
        />
      </div>

      <Form.TextInput
        id="email"
        label="Email"
      />

      <Form.CheckboxInput
        id="proof_of_identity"
        label="Proof of Identity"
        text="Would you like your tenant to provide proof of identity?"
      />

      <Form.CheckboxInput
        id="proof_of_income"
        label="Proof of Income"
        text="Would you like your tenant to provide proof of income?"
      />

      <Form.CheckboxInput
        id="employers_details"
        label="Employer's Details"
        text="Would you like your tenant to provide their employer's details?"
      />

      <Form.CheckboxInput
        id="references"
        label="References"
        text="Would you like your tenant to provide references?"
      />

      <Button.Container justify="end">
        <Button>Invite Tenant</Button>
      </Button.Container>
    </form>
  )
}

export default TenantInviteForm
