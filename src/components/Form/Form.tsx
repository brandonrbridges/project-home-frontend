// React Hook Form
import { UseFormRegisterReturn } from 'react-hook-form'

// Styles
import styles from './Form.module.scss'

// Helpers
import classNames from 'classnames'

const Form = () => {}

interface TextInputProps {
  id: string
  label?: string
  type?: 'email' | 'password' | 'text' | 'number'
  register?: UseFormRegisterReturn
}

const TextInput = (props: TextInputProps) => {
  const type = props.type || 'text'

  return (
    <div className={classNames(styles.text_input)}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={type}
        id={props.id}
        {...props.register}
      />
    </div>
  )
}

interface DateInputProps {
  id: string
  label?: string
  register?: UseFormRegisterReturn
}

const DateInput = (props: DateInputProps) => {
  return (
    <div className={classNames(styles.date_input)}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="date"
        id={props.id}
        {...props.register}
      />
    </div>
  )
}

interface SelectInputProps {
  id: string
  label?: string
  options: string[]
  register?: UseFormRegisterReturn
}

const SelectInput = (props: SelectInputProps) => {
  return (
    <div className={classNames(styles.select_input)}>
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        {...props.register}
      >
        {props.options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

interface CheckboxInputProps {
  id: string
  label?: string
  text?: string
  register?: UseFormRegisterReturn
}

const CheckboxInput = (props: CheckboxInputProps) => {
  return (
    <div className={classNames(styles.checkbox_input)}>
      <input
        type="checkbox"
        id={props.id}
        {...props.register}
      />

      <div>
        <label htmlFor={props.id}>{props.label}</label>
        {props.text && (
          <label
            htmlFor={props.id}
            className={styles.text}
          >
            {props.text}
          </label>
        )}
      </div>
    </div>
  )
}

Form.CheckboxInput = CheckboxInput
Form.DateInput = DateInput
Form.SelectInput = SelectInput
Form.TextInput = TextInput

export default Form
