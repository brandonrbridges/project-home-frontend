// Styles
import styles from './Alert.module.scss'

// Packages
import classNames from 'classnames'

// Icons
import { IconExclamationCircle } from '@tabler/icons-react'

interface AlertProps {
  children: React.ReactNode
  variant: 'success' | 'warning' | 'error'
}

const Alert = (props: AlertProps) => {
  let icon

  switch (props.variant) {
    case 'success':
      icon = <IconExclamationCircle />
      break
    case 'warning':
      icon = <IconExclamationCircle />
      break
    case 'error':
      icon = <IconExclamationCircle />
      break
  }

  return (
    <div
      className={classNames(styles.base, {
        [styles.success]: props.variant === 'success',
        [styles.warning]: props.variant === 'warning',
        [styles.error]: props.variant === 'error',
      })}
    >
      <div className={styles.icon}>{icon}</div>
      <div>{props.children}</div>
    </div>
  )
}

export default Alert
