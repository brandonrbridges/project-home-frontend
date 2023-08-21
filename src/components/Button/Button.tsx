// Next
import Link from 'next/link'

// Styles
import styles from './Button.module.scss'

// Packages
import classNames from 'classnames'

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
  icon?: React.ReactNode
  iconAlign?: 'left' | 'right'
  className?: string
  href?: string
  onClick?: () => void
}

interface ButtonContainerProps {
  children: React.ReactNode
  justify?: 'start' | 'center' | 'end' | 'between'
  className?: string
}

const Button = (props: ButtonProps) => {
  const type = props.type || 'button'
  const variant = props.variant || 'primary'
  const iconAlign = props.iconAlign || 'right'

  const element = (
    <button
      type={type}
      onClick={props.onClick}
      className={classNames(
        styles.base,
        {
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
          [styles.tertiary]: variant === 'tertiary',
          [styles.danger]: variant === 'danger',
        },
        {
          [styles.has_icon]: props.icon,
          [styles.reverse]: props.icon && iconAlign === 'left',
        },
        props.className,
      )}
    >
      {props.children}
      {props.icon && props.icon}
    </button>
  )

  if (props.href) {
    return <Link href={props.href}>{element}</Link>
  } else {
    return element
  }
}

const ButtonContainer = (props: ButtonContainerProps) => {
  const justify = props.justify || 'center'

  return (
    <div
      className={classNames(
        styles.container,
        {
          'justify-start': justify === 'start',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-between': justify === 'between',
        },
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

Button.Container = ButtonContainer

export default Button
