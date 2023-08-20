// Styles
import classNames from 'classnames'
import styles from './Chip.module.scss'

interface ChipProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'emerald' | 'orange' | 'sky'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Chip = (props: ChipProps) => {
  const size = props.size || 'md'

  return (
    <div
      className={classNames(
        styles.base,
        {
          [styles.primary]: props.variant === 'primary',
          [styles.secondary]: props.variant === 'secondary',
          [styles.tertiary]: props.variant === 'tertiary',
          [styles.emerald]: props.variant === 'emerald',
          [styles.orange]: props.variant === 'orange',
          [styles.sky]: props.variant === 'sky',
        },
        {
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
          [styles.lg]: size === 'lg',
        },
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}

export default Chip
